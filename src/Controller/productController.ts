import { Request, Response } from "express";
import { db } from "../db/index";
import { productsTable } from "../db/productsSchema";
import { eq } from "drizzle-orm";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await db.select().from(productsTable);

    res.json(products);
  } catch (error) {
    res.send(500).send(error);
  }
}

export async function getProductById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, Number(id)));

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.send(500).send(error);
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    const [product] = await db
      .insert(productsTable)
      .values(req.body)
      .returning();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function updateProduct(req: Request, res: Response) {
  res.send("Create a product today");

  const id = Number(req.params);
  const updatedFields = req.body;

  try {
    const [updatedProduct] = await db
      .update(productsTable)
      .set(updatedFields)
      .where(eq(productsTable.id, id))
      .returning();

    if (!updatedProduct) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(204).json(updateProduct);
  } catch (error) {
    res.send(500).send(error);
  }
}

export async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const [deleteProduct] = await db
      .delete(productsTable)
      .where(eq(productsTable.id, Number(id)))
      .returning();

    if (!deleteProduct) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(204).send();
  } catch (error) {
    res.send(500).send(error);
  }
}
