import { ComicFormat } from "../../constants/ComicFormatTypes.enum";
import { BaseState } from "../root.models";

export interface Comic {
    id: string;
    title: string;
    thumbnail: string;
    price: number;
    releaseDate: string | Date;
    pageCount: number;
    characters: string[];
    creators: string[];
    format: string;
    diamondCode: string;
}

export interface ComicState extends BaseState {
    items: Comic[]
}

export interface ComicPayload {
    limit: number;
    offset: number;
    format: ComicFormat
}

export const jsonToComicBuilder = (json: any): Partial<Comic> => {
    return {
        id: json.id,
        title: json.title,
        thumbnail: json.thumbnail.path + "." + json.thumbnail.extension,
        diamondCode: json.diamondCode,
        pageCount: json.pageCount,
        format: json.format,
        characters: json.characters.items.map((c: any) => c.name),
        creators: json.creators.items.map((c: any) => c.name),
        price: json.prices.find((p: any) => p.type === "printPrice")?.price,
        releaseDate: json.dates.find((d: any) => d.type === "onsaleDate")?.date
    }
}

