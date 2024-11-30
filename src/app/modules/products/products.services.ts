import { TProduct } from "./products.interface"
import { Product } from "./products.model"

const createProductIntoDb = async(product: TProduct) => {
    const result = await Product.create(product);
    return result;
}

export const productServices = {
    createProductIntoDb
}