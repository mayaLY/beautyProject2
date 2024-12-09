import { Client } from "../../model/userModel";

export const registerToDB = async (clientData: Client) => {
    try {
        const response = await fetch('http://localhost:3006/api/clients/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(clientData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error setting user:', error);
        throw error;
    }
};

export const loginToDB = async (email: string, password: string) => {
  try {
    const response = await fetch('api/clients/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }), 
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.statusText}`);
    }

    return await response.json(); 
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
