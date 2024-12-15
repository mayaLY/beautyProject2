// src/services/cartService.js

const API_BASE_URL = 'http://localhost:3006/api/cart'; // Adjust the URL to your backend server

export async function getCart(userId: any) {
    try {
        const response = await fetch(`${API_BASE_URL}/${userId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch cart');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching cart:', error);
        throw error;
    }
}

export async function addToCart(userId: string, productId: string, quantity: number) {
    try {
        const response = await fetch(`${API_BASE_URL}/add`, {
            method: 'POST',
            headers: {            
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, productId, quantity }),
        });
        if (!response.ok) {
            throw new Error('Failed to add item to cart');
        }
        return await response.json();
    } catch (error) {    
        console.error('Error adding item to cart:', error);
        throw error;
    }
}

export async function deleteFromCart(userId: string, productId: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, productId }),
        });
        if (!response.ok) {
            throw new Error('Failed to delete item from cart');
        }
        return await response.json();
    } catch (error) {
        console.error('Error deleting item from cart:', error);
        throw error;
    }
}       

export async function updateCart(userId: string, productId: string, quantity: number) {
    try {
        const response = await fetch(`${API_BASE_URL}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, productId, quantity }),
        });
        if (!response.ok) {
            throw new Error('Failed to update cart');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating cart:', error);
        throw error;
    }
}