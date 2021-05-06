import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/db.json'
})

export const programmAPI = {
    getSlides() {
        return instance.get()
    },
    getProducts(skip, take) {
        let res = instance.get();

        if (skip !== undefined && take !== undefined) {
            res.then(r => {
                r.data.products = r.data.products.slice(skip, skip + take);
            })
        }

        console.log(res, skip, take);
        return res;
    }
    // getElectronicProducts(skip, take) {
    //     let res = instance.get();

    //     if (skip !== undefined && take !== undefined) {
    //         res.then(r => {
    //             r.data.products = r.data.products.filter(p => p.type === "electronics");
    //             r.data.products = r.data.products.slice(skip, skip + take);
    //         })
    //     }

    //     console.log(res, skip, take);
    //     return res;
    // }
}