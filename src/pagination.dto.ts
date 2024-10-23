import {IsOptional, IsPositive} from "class-validator";
import {Type} from "class-transformer";

export class PaginationDto {
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    skip?: number;

    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit?:  number;
}