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

// add order into database
const calculateRevenueFromOrder = async () => {
  const totalRevenue = await Orders.aggregate([
    {
      $addFields: {
        productObjectId: { $toObjectId: "$product" }, // Convert string to ObjectId
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "productObjectId",
        foreignField: "_id",
        as: "productDetails",
      },
    },
    {
      $unwind: '$productDetails', 
    },
    {
      $group: {
        _id: null, // Group all orders together
        totalRevenue: {
          $sum: {
            $multiply: [ '$productDetails.price','$quantity'], // Calculate total price for each order
          },
        },
      },
    },
  ]);
  return totalRevenue[0].totalRevenue; 
};

export const orderService = {
  createOrderIntoDb,
  calculateRevenueFromOrder,
};
