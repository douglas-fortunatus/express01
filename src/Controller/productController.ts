import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  res.send("the list of products");
}

export function getProductById(req: Request, res: Response) {
  console.log(req.params);
  res.send("A product");
}

export function createProduct(req: Request, res: Response) {
  console.log(req.body);

  res.send("Create a product today");
}

export function updateProduct(req: Request, res: Response) {
  res.send("Create a product today");
}

export function deleteProduct(req: Request, res: Response) {
  res.send("Create a product today");
}
