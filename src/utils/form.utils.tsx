import { ChangeEvent } from "react";

const updateElement = <T extends any>(setData: (result: T | any) => void, event: ChangeEvent<HTMLInputElement>, obj: any, setElementValue: (elementValue: string) => void): void => {
    const target = event.target as HTMLInputElement;
    setData((prevState: T | any) => {
        const state: T | any = !!target ? { ...prevState, [target.name]: target.value } : prevState;
        return state;
    });
    setElementValue(target.value);
}

const formUtils = { updateElement };

export default formUtils;