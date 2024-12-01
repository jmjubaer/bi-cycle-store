/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderService } from './orders.services';
import orderValidationSchema from './orders.validation';

// create Order controller
const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const zodParseData = orderValidationSchema.parse({
      ...order,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    
    const result = await orderService.createOrderIntoDb(zodParseData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.name === 'ZodError' ? 'Validation failed' : error.message,
      error: error,
      stack: error.stack,
    });
  }
};

export const orderControllers = {
  createOrder,
};
