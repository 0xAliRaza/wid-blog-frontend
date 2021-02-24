import { Post } from "./post";

export interface Author {
    name: string;
    slug: string;
    website?: string;
    description?: string;
    posts?: Post[];
}