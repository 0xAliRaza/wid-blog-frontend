import { Post } from "./post";

export interface Tag {
    name: string;
    slug: string;
    description: string;
    posts?: Post[];
}