import { ReturnUserDto } from "../user/returnUser.dto";

export interface ReturnLoginDto {
    accessToken: string,
    user: ReturnUserDto,
}