// product model
export class Product {
    onSale: boolean = true;

    constructor(
        public name: string,
        public code: string,
        public price: number) { }

    isOnSale(): boolean {
        return this.onSale;
    }
}