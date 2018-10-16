declare namespace app.product {
    interface IProduct {
        productId: number;
        productName: string;
        productCode: string;
        releaseDate: Date;
        price: number;
        description: string;
        imageUrl: string;
        calculateDiscount(percent: number): number;
    }
    class Product implements IProduct {
        productId: number;
        productName: string;
        productCode: string;
        releaseDate: Date;
        price: number;
        description: string;
        imageUrl: string;
        constructor(productId: number, productName: string, productCode: string, releaseDate: Date, price: number, description: string, imageUrl: string);
        calculateDiscount(percent: number): number;
    }
}
