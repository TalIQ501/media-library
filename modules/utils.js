const processItem = (obj, methodName, ...args) => {
    obj[methodName](...args);
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
    console.log(processedData)
    return processedData;
}

const sortFunc = (lst, sort, desc) => {
    const stringBased = new Set(["name", "author", "genre"])
    const numBased = new Set(["rating"])
    const dateBased = new Set(["date_added", "date_published"])

    if (stringBased.has(sort)) {
        desc ?
            lst.sort((a, b) => b[sort].localeCompare(a[sort])) :
            lst.sort((a, b) => a[sort].localeCompare(b[sort]))
    } else if (numBased.has(sort)) {
        desc ?
            lst.sort((a, b) => a.score - b.score) :
            lst.sort((a, b) => b.score - a.score)
    } else if (dateBased.has(sort)) {
        desc ?
            lst.sort() :
            lst.sort()
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

export const createGrid = (objLst, methodName, targetDiv, { cutOff = 0, sort = "date_added", desc = false }) => {
    sortFunc(objLst, "name");

    if (sort !== "name") {
        sortFunc(objLst, sort, desc);
    }

    if (cutOff > 0) {
        objLst.splice(cutOff);
    }

    objLst.forEach(obj => {
        processItem(obj, methodName, targetDiv);
    })
};

export const convertDDMMYY = (date) => {
    console.log(date)
    if (date !== "") {
        console.log('Processing date')
        const [day, month, year] = date.split('/');
        console.log(`${day} / ${month} / ${year}`)
        return new Date(year, month - 1, day);
    }
}

export const filterSearchSort = (lst, { sort = 'date_added', search = null, filters = {} }) => {
    let filteredList = lst.filter(item => {
        return Object.entries(filters).every(([filter, filterValue]) => {
            if (filterValue === '') return true;
            if (filter === 'genre') {
                return (
                    item[filter].has(filterValue.toLowerCase()) && 
                    item[filter] !== ''
                )
            } else {
                return (
                    item[filter].toLowerCase() === filterValue.toLowerCase() &&
                    item[filter] !== ''
                );

            }
        });
    });

    console.log(filteredList)

    if (search) {
        filteredList = searchFunc(filteredList, search);
    }

    if (filteredList) {
        filteredList = sortFunc(filteredList, sort);
        if (sort !== "name" && filteredList) {
            filteredList = sortFunc(filteredList, sort);
        }
    }

    return filteredList
}