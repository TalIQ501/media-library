const processItem = (obj, methodName, ...args) => {
    //Generic HTML Object Creator specified in class (prototype)
    obj[methodName](...args);
}

export const convertDDMMYY = (date) => {
    //Convert DD/MM/YYYY to Date Object
    if (date !== "") {
        const [day, month, year] = date.split('/');
        return new Date(year, month - 1, day);
    }
}

//Process Data Received from Filter Form
//Makes sure filters are bunched together in generic form
export const processFormData = (formData, givenFilters) => {
    const processedData = {};
    const filters = {};

    for (const [key, value] of formData.entries()) {
        //Filters are converted into sets for ease
        if (givenFilters.has(key)) {
            filters[key] = value;
        } else {
            processedData[key] = value;
        }
    }

    //Creating batch separate object for filters
    processedData["filters"] = filters;
    return processedData;
}

const sortFunc = (lst, sorter, desc) => {
    //Sets for differentiating based on data type
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
        //Skips when there are no filters
        if (!filters) {
            return true;
        }
        
        //Looping over filters
        return Object.entries(filters).every(([filter, filterValue]) => {
            if (!filterValue) {
                return true;
            }
    
            const itemValue = item[filter];
            
            if (itemValue === null || itemValue === undefined) {
                return false;
            }
            
            //If filter is in Array form, convert to set and check if given filter value exists
            if (Array.isArray(itemValue)) {
                const lowerCaseValues = new Set(
                    itemValue.map(v => String(v).toLowerCase())
                );
                return lowerCaseValues.has(filterValue.toLowerCase());
            }
            //Converts value to lowercase for equality
            const stringValue = String(itemValue).toLowerCase();
            return stringValue === filterValue.toLowerCase() && stringValue !== '';
        });
    });

    //Checks if search exists
    if (search && filteredList) {
        filteredList = searchFunc(filteredList, search);
    }

    if (filteredList) {
        //Sort by name in advance
        filteredList = sortFunc(filteredList, "name");
        if (sort !== "name" && filteredList) {
            filteredList = sortFunc(filteredList, sort);
        }
    }

    return filteredList
}

//Creating a grid of objects using parameteres
export const createGrid = (objLst, methodName, targetDiv, filterData = { sort: "date_added", desc: false, filters: {} }, cutOff = 0) => {
    const filteredList = filterSearchSort(objLst, filterData)

    //Number of objects that must be displayed
    if (cutOff > 0) {
        filteredList.splice(cutOff);
    }

    //Create Item using object method
    filteredList.forEach(obj => {
        processItem(obj, methodName, targetDiv);
    })
};