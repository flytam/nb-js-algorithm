### 牛逼 js 算法集合

#### o(n)时间复杂度实现数组排序

```typescript
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
```

#### 判断数字是否奇数的n种写法

### tips

- 如何添加牛逼的算法

```src```目录下添加相应文件，```tests```目录下添加相应测试即可。算法还要牛逼。最后再在readme中添加说明
