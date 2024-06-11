import { ReturnCartProductDto } from "../cart-product/returnCartProduct.dto";

export interface ReturnCartDto {
    uuid_cart: string,
    uuid_user: string,
    active: boolean,
    created_at: string,
    updated_at: string,
    cart_products: ReturnCartProductDto[]
}