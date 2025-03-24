"use server";
import dbConnect from "@/lib/dbConnect";
import Product from "@/models/product";

export default async function handler(req, res) {
  // Check if the request originates from our allowed domain.
  // You can set this value via an environment variable.
  const allowedOrigin = process.env.ALLOWED_ORIGIN || "http://localhost:3000";
  const referer = req.headers.referer || "";
  if (!referer.startsWith(allowedOrigin)) {
    return res.status(403).json({ success: false, message: "Unauthorized" });
  }

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
