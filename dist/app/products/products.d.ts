/**
 * Created by Hafeez Syed on 24/3/18.
 */
export declare namespace app.domain {
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
