import { ReturnCartDto } from "../cart/returnCart.dto"

export interface ReturnUserDto {
    uuid_user: string,
    name: string,
    cpf: string,
    email: string,
    phone: string,
    uuid_city: string
    cart_active?: ReturnCartDto
    role?: number,
}