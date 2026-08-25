

interface ProductData {
    id: number;
    thumb: string;
    title: string;
    category: string;
    price: number;
    old_price?: number;
    rating: number;
    sale?:string;
}

const shop_data: ProductData[] = [
    {
        id: 1,
        thumb: "/assets/img/product/product_1_1.jpg",
        title: "Printed T-Shirt",
        category: "Archive",
        price: 20.30,
        old_price: 25.20,
        rating: 5,
    },
    {
        id: 2,
        thumb: "/assets/img/product/product_1_2.jpg",
        title: "Card Wallet",
        category: "Branding",
        price: 20.00,
        rating: 5,
        sale:"sale",
    },
    {
        id: 3,
        thumb: "/assets/img/product/product_1_3.jpg",
        title: "Kinto Tumbler",
        category: "Company",
        price: 38.10,
        rating: 5,
    },
    {
        id: 4,
        thumb: "/assets/img/product/product_1_4.jpg",
        title: "Ripple Crewneckt",
        category: "Design",
        price: 160.90,
        rating: 4,
    },
    {
        id: 5,
        thumb: "/assets/img/product/product_1_5.jpg",
        title: "Herman Miller",
        category: "Business",
        price: 44.50,
        rating: 5,
        sale:"sale",
    },
    {
        id: 6,
        thumb: "/assets/img/product/product_1_6.jpg",
        title: "Knit Beanie",
        category: "Modern",
        price: 50.30,
        old_price: 80.20,
        rating: 5,
    },
    {
        id: 7,
        thumb: "/assets/img/product/product_1_7.jpg",
        title: "Bifold Wallet",
        category: "Archive",
        price: 84.90,
        old_price: 110.30,
        rating: 3,
    },
    {
        id: 8,
        thumb: "/assets/img/product/product_1_8.jpg",
        title: "Pillars Tee",
        category: "Branding",
        price: 26.80,
        rating: 4,
        sale:"sale",
    },
    {
        id: 9,
        thumb: "/assets/img/product/product_1_1.jpg",
        title: "Printed T-Shirt",
        category: "Archive",
        price: 20.30,
        old_price: 25.20,
        rating: 5,
    },
    {
        id: 10,
        thumb: "/assets/img/product/product_1_2.jpg",
        title: "Card Wallet",
        category: "Branding",
        price: 20.00,
        rating: 5,
    },
    {
        id: 11,
        thumb: "/assets/img/product/product_1_3.jpg",
        title: "Kinto Tumbler",
        category: "Company",
        price: 38.10,
        rating: 5,
        sale:"sale",
    },
]
export default shop_data;