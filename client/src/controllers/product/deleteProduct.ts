export const deleteProduct = async (productId: string) => {
    try {
        const response = await fetch(`http://localhost:3006/api/products/${productId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete product');
        }

        return true;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};