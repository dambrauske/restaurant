export type Restaurant = {
    name: string,
    address: string,
    phone: string,
    description: string;
    menu: MenuCategory[],
}

export type MenuCategory = {
        name: string,
        items: MenuItem[];
}

export type MenuItem = {
    name: string;
    description: string;
    price: number;
}


