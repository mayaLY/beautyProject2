import { Product } from "../../model/productModel";

export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('http://localhost:3000/api/clients/get-all-products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch products. Status: ${response.status}`);
        }

        const data = await response.json();
        return data as Product[];
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; 
    }
};