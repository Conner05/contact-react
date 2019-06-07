const getEditPath = (path: string) => {
    const pathEditIndex: number = path.lastIndexOf(':');
    return path.replace(path.substring(pathEditIndex), "edit");
}

const routeUtils = { getEditPath };

export default routeUtils;