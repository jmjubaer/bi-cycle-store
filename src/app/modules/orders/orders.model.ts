import { Schema } from 'mongoose';
import { TOrder } from './orders.interface';

const orderSchema = new Schema<TOrder>({
  email: { type: String, required: [true, 'Email is required'] },
  product: { type: String, required: [true, 'Product is required'] },
  quantity: { type: Number, required: [true, 'Quantity is required'] },
  totalPrice: { type: Number, required: [true, 'Total Price is required'] },
});
