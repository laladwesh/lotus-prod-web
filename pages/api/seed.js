"use server";
import dbConnect from "@/lib/dbConnect";
import Product from "@/models/product";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const products = await Product.find({});
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (req.method === "POST") {
    try {
      const productData = req.body;
      const newProduct = await Product.create(productData);
      res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
