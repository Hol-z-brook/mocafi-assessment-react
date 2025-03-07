'use server'

import { usersSample } from "../users/_/users.sample";

export interface User {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
}

export async function fetchUser(id: number): Promise<User | undefined> {
    return usersSample.find(user => user.id === id);

    const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
            'Authorization': `Bearer ${process.env.GOREST_API_KEY}`,
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }

    return res.json();
}

export async function deleteUser(id: number) {
    const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
        method: 'DELETE',
            headers: {
            'Authorization': `Bearer ${process.env.GOREST_API_KEY}`,
        },
    });

    if (!res.ok) {
        throw new Error('Failed to delete user');
    }

    return res.json();
}
