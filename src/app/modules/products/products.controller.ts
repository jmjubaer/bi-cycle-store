/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { productServices } from './products.services';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body;
    const result = productServices.createProductIntoDb(product);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export const productControllers = {
  createProduct
}
