import React from 'react';

const getById = async <T extends any>(id: number, getData: (id: number) => Promise<T>, setData: (result: T) => void) => {
    try {
        const result = await getData(id);
        setData(result);
    } catch {
        console.log('error')
        throw new Error(`getById(${id}): Couldn't fetch data`);
    }
};

const getAll = async <T extends any>(getData: () => Promise<T>, setData: (result: T) => void) => {
    try {
        const result = await getData();
        setData(result);
    } catch {
        console.log('error')
        throw new Error(`getAll(): Couldn't fetch data`);
    }
};

const dataFetcher = { getAll, getById };

export default dataFetcher;