export const sortFunc = (obj, param, desc) => {
    const stringBased = new Set(["name", "author", "genre"])
    const numBased = new Set(["rating"])
    const dateBased = new Set(["date_added", "date_published"])

    if (stringBased.has(param)) {
        desc ? 
        obj = obj.sort((a, b) => b[param].localeCompare(a[param])) :
        obj = obj.sort((a, b) => a[param].localeCompare(b[param]))
    }

    return obj;
}