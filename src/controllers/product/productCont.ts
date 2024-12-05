import Product from '../../model/Product/productModel';

//Fetch all products
export const getProducts = async (req: any, res: any) =>  {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

//Add a product
export const addProduct = async (req: any, res: any) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: 'Failed to add product' });
    }
  };

  // Update a product
export const updateProduct = async (req: any, res: any) => {
    try {
      const { id } = req.params;
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
      res.json(updatedProduct);
    } catch (error) {
      res.status(400).json({ error: 'Failed to update product' });
    }
  };
  
  // Delete a product
  export const deleteProduct = async (req: any, res: any) => {
    try {
      const { id } = req.params;
      await Product.findByIdAndDelete(id);
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to delete product' });
    }
  };

