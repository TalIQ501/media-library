export const fetchData = async (param=null) => {
    try {
        console.log('Fetching data')
        const res = await fetch('/data/db.json');
        if (param) {
            const data = await res.json();
            return data[param];
        }
        const data = await res.json()
        return data;
    } catch (err) {
        console.error('Error fetching data: ', err);
    }
}
