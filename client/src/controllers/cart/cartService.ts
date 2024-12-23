// src/services/cartService.js

export async function getCart(userId: any) {
    try {
        const response = await fetch(`http://localhost:3006/api/cart/${userId}`);
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
        const response = await fetch(`http://localhost:3006/api/cart/add-to-cart`, {
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
        const response = await fetch(`http://localhost:3006/api/cart/${userId}/delete/${productId}`, {
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
        const response = await fetch(`'http://localhost:3006/api/cart/update-cart`, {
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