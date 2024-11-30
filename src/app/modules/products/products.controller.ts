/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { productServices } from './products.services';
import ProductValidationSchema from './products.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const zodParseData = ProductValidationSchema.parse({
      ...product,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const result = await productServices.createProductIntoDb(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Bicycle created successfully',
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

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductsFromDb();

    res.status(200).json({
      success: true,
      message: 'Bicycles retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
      stack: error.stack,
    });
  }
};

export const productControllers = {
  createProduct,
  getAllProducts,
};
