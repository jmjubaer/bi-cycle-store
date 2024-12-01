import { Product } from '../products/products.model';
import { TOrder } from './orders.interface';
import { Orders } from './orders.model';
import { ObjectId } from 'mongodb';
// add order into database
const createOrderIntoDb = async (order: TOrder) => {
  const productData = await Product.findOne({
    _id: new ObjectId(order.product),
  });

  if (!productData) {
    throw new Error('Product not found');
  }
  if (productData.quantity < order.quantity || productData.inStock === false) {
    throw new Error('Insufficient stock, product is not available');
  }
  const restProductQuantity = productData.quantity - order.quantity;
  if (restProductQuantity === 0) {
    await Product.updateOne(
      { _id: new ObjectId(order.product) },
      { quantity: 0, inStock: false },
    );
  } else {
    await Product.updateOne(
      { _id: new ObjectId(order.product) },
      { quantity: restProductQuantity },
    );
  }
  
  const result = await Orders.create(order);
  return result;
};

export const orderService = {
  createOrderIntoDb,
};
