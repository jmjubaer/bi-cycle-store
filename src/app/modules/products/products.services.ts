import { TProduct } from './products.interface';
import { ObjectId } from 'mongodb';
// product model
import { Product } from './products.model';
// add product into database
const createProductIntoDb = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};
// get all products form database
const getAllProductsFromDb = async () => {
  const result = await Product.find();
  return result;
};
// get single product
const getSingleProductsFromDb = async (id: string) => {
  const result = await Product.findOne({ _id: new ObjectId(id) });
  return result;
};

// update product
const updateProductsFromDb = async (id: string, updateData: TProduct) => {
  const result = await Product.findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        updateData,
      },
    },
  );
  return result;
};

// delete product
const deleteProductsFromDb = async (id: string) => {
  const result = await Product.deleteOne({ _id: new ObjectId(id) });
  return result;
};

export const productServices = {
  createProductIntoDb,
  getAllProductsFromDb,
  getSingleProductsFromDb,
  updateProductsFromDb,
  deleteProductsFromDb,
};
