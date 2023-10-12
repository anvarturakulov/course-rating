import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Review } from "@/interfaces/product.interface";

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    review : Review;
}