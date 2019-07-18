// product model
export class Product {

    image: string;

    constructor(
        public name: string,
        public code: string,
        public price: number) { }
}