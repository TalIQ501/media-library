const processItem = (obj, methodName, ...args) => {
    obj[methodName](...args);
}

const sortFunc = (obj, sort, desc) => {
    const stringBased = new Set(["name", "author", "genre"])
    const numBased = new Set(["rating"])
    const dateBased = new Set(["date_added", "date_published"])

    if (stringBased.has(sort)) {
        desc ? 
        obj = obj.sort((a, b) => b[sort].localeCompare(a[sort])) :
        obj = obj.sort((a, b) => a[sort].localeCompare(b[sort]))
    }

    return obj;
}

export const createGrid = (objLst, methodName, targetDiv, sort="date_added", desc=false) => {
    sortFunc(objLst, sort, desc);

    objLst.forEach(obj => {
        processItem(obj, methodName, targetDiv);
    })
};