import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;
    const limit = 50;
    const skip = (page - 1) * limit;

    const searchName = req.query.name || "Product 100";

    const products = await Product.find({ name: searchName })
      .select("name price category")
      .skip(skip)
      .limit(limit).lean();
console.log(products.length);
    res.json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};