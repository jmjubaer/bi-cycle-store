import { TProduct } from "./products.interface"
import { Product } from "./products.model"

const createProductIntoDb = async(product: TProduct) => {
    const result = await Product.create(product);
    return result;
}
const getAllProductsFromDb = async() => {
    const result = await Product.find();
    return result;
}
export const productServices = {
    createProductIntoDb,
    getAllProductsFromDb
}