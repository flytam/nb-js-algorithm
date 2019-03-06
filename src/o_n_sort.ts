const numberPromise = (number: number): Promise<number> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(number);
        }, number * 100);
    });
};

export const o_n_sort = async (arr: number[]): Promise<number[]> => {
    const result: number[] = [];
    const p = arr.map(item =>
        numberPromise(item).then((number: number) => {
            result.push(number);
        })
    );
    await Promise.all(p);
    return result;
};
