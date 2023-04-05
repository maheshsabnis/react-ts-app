// The following type defins the props those are used by the component
export type DataProps = {
    name:string,
    profile:{
     firstName: string,
     middleName:string,
     lastName: string
    },
    skills:string[]
 };

export type Product = {
    ProductId: string,
    ProductName: string,
    CategoryName: string,
    Description: string,
    Manufacturer: string,
    Price: number
}; 

export class ProductInfo  {
    constructor( public ProductRowId: number,
        public  ProductId: string,
        public ProductName: string,
        public CategoryName: string,
        public Manufacturer: string,
        public Description: string,
        public  BasePrice: number){}
   
}