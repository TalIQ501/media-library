const processItem = (obj, methodName, ...args) => {
    obj[methodName](...args);
}

export const convertDDMMYY = (date) => {
    if (date !== "") {
        const [day, month, year] = date.split('/');
        return new Date(year, month - 1, day);
    }
}

export const processFormData = (formData, givenFilters) => {
    const processedData = {};
    const filters = {};

    for (const [key, value] of formData.entries()) {
        if (givenFilters.has(key)) {
            filters[key] = value;
        } else {
            processedData[key] = value;
        }
    }

    processedData["filters"] = filters;
    return processedData;
}

const sortFunc = (lst, sorter, desc) => {
    const stringBased = new Set(["name", "author", "genre"])
    const numBased = new Set(["rating"])
    const dateBased = new Set(["date_added", "date_published"])

    if (stringBased.has(sorter)) {
        desc ?
            lst.sort((a, b) => b[sorter].localeCompare(a[sorter])) :
            lst.sort((a, b) => a[sorter].localeCompare(b[sorter]))
    } else if (numBased.has(sorter)) {
        desc ?
            lst.sort((a, b) => a[sorter] - b[sorter]) :
            lst.sort((a, b) => b[sorter] - a[sorter])
    } else if (dateBased.has(sorter)) {
        desc ?
            lst.sort((a, b) => a[sorter] - b[sorter]) :
            lst.sort((a, b) => b[sorter] - a[sorter])
    }

    return lst;
}

const searchFunc = (lst, search) => {
    const searchedList = lst.filter(item => {
        if (item["name"].toLowerCase().includes(search.toLowerCase())) {
            return item
        }
    });
    return searchedList
}

export const filterSearchSort = (lst, { sort, search, filters }) => {
    let filteredList = lst.filter(item => {
        if (!filters) {
            return true;
        }
    
        return Object.entries(filters).every(([filter, filterValue]) => {
            if (!filterValue) {
                return true;
            }
    
            const itemValue = item[filter];
            
            if (itemValue === null || itemValue === undefined) {
                return false;
            }
    
            if (Array.isArray(itemValue)) {
                const lowerCaseValues = new Set(
                    itemValue.map(v => String(v).toLowerCase())
                );
                return lowerCaseValues.has(filterValue.toLowerCase());
            }
            const stringValue = String(itemValue).toLowerCase();
            return stringValue === filterValue.toLowerCase() && stringValue !== '';
        });
    });

    if (search) {
        filteredList = searchFunc(filteredList, search);
    }

    if (filteredList) {
        filteredList = sortFunc(filteredList, "name");
        if (sort !== "name" && filteredList) {
            filteredList = sortFunc(filteredList, sort);
        }
    }

    return filteredList
}

export const createGrid = (objLst, methodName, targetDiv, filterData = { sort: "date_added", desc: false, filters: {} }, cutOff = 0) => {
    const filteredList = filterSearchSort(objLst, filterData)

    if (cutOff > 0) {
        filteredList.splice(cutOff);
    }

    filteredList.forEach(obj => {
        processItem(obj, methodName, targetDiv);
    })
};