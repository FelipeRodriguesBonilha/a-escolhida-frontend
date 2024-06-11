import { ReturnProductDto } from "../product/returnProduct.dto";

export interface ReturnCartProductDto {
    uuid_cart_product: string,
    uuid_product: string,
    uuid_cart: string,
    quantity_product: number,
    created_at: string,
    updated_at: string,
    product: ReturnProductDto
}