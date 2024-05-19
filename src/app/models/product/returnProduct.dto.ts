import { Category } from "../category/returnCategory.dto";
import { Supplier } from "../supplier/returnSupplier.dto";

export interface ReturnProductDto {
    uuid_product: string;
    description: string;
    stock_quantity: number;
    sold_amount: number;
    price: number;
    image_url: string;
    uuid_category: string;
    uuid_supplier: string;
    likes: number;
    created_at: string;
    updated_at: string;
    category: Category;
    supplier: Supplier;
}
