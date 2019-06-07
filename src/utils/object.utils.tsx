const getNestedObject = (baseObj: any, nestedObj: string) => {
    const objects = nestedObj.split('.');
    return objects.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, baseObj);
}

const objectUtils = { getNestedObject };

export default objectUtils;