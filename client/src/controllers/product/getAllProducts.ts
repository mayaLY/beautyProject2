import { Product } from "../../model/productModel";

export const fetchProductsFromPublicApi = async (): Promise<Product[]> => {
    try {
        const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch products from public API. Status: ${response.status}`);
        }


        const data = await response.json();
        return data.products as Product[];
        
    } catch (error) {
        console.error('Error fetching products from public API:', error);
        throw error;
    }

}

export const sendProductsToServer = async (): Promise<Product[]> => {
    try {
        
        const publicApiProducts = await fetchProductsFromPublicApi();

        
        const response = await fetch('http://localhost:3006/api/products/add-products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(publicApiProducts)
        });

        if (!response.ok) {
            throw new Error(`Failed to send products to server. Status: ${response.status}`);
        }

        
        const returnedProducts = await response.json();
        return returnedProducts as Product[];
        
    } catch (error) {
        console.error('Error sending products to server:', error);
        throw error;
    }
};

export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('http://localhost:3006/api/products/get-all-products');

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