export interface Product {
    name: string;
    price: string;
    image: string;
    category?: string;
    link?: string;
    // We might want an ID, but for now we'll rely on name or add generated IDs
    id?: string;
}

export interface CartItem extends Product {
    quantity: number;
}
