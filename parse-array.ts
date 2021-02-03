const keepElement = (value:number, min: number, max:number): boolean => {
    return value < min || value > max
}

const addDistinctValue = (values: number[], value:number): number[] => {
    if(!values.includes(value)) {
        values.push(value)
    }
    return values
}

export const parseArray = (array: number[], min: number, max:number):number[] => {
    return array
    .filter((item) => keepElement(item, min, max))
    .reduce((current, item) => {return addDistinctValue(current, item)}, new Array<number>())
}