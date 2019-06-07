const getById = async <T extends any>(id: number, getData: (id: number) => Promise<T>, setData: (result: T) => void) => {
    try {
        const result = await getData(id);
        setData(result);
        return result;
    } catch {
        console.log('error')
        throw new Error(`getById(${id}): Couldn't fetch data`);
    }
};

const getAll = async <T extends any>(getData: () => Promise<T>, setData: (result: T) => void) => {
    try {
        const result = await getData();
        setData(result);
    } catch (error) {
        const badResult: T | any = null;
        setData(badResult);
    }
};

const update = async <T extends any>(updateRoute: (data: T) => Promise<void>, dataToUpdate: T) => {
    try {
        await updateRoute(dataToUpdate);
    } catch (error) {
        throw new Error("Couldn't update contact");
    }
}

const apiUtils = { getAll, getById, update };

export default apiUtils;