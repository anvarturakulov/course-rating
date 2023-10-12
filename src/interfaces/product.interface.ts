export interface ProductModel {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    image: string;
    description: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    characteristics: ProductCharacteristic[];
    advantages?: string;
    disadvantages?: string;
    initialRating: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
    html: string;
    blog: Blog;
    companyId: string;
    clicks: number;
    reviews: Review[];
    reviewCount: number;
    reviewAvg?: number;
}

export interface Review {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    productId: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface Blog {
    text: string;
    _id: string;
    bigImage?: string;
}

export interface ProductCharacteristic {
    name: string;
    value: string;
}