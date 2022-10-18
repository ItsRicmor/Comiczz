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


interface ComicItem {
    name: string;
}

interface PriceItem {
    type: string;
    price: number;
}

interface DateItem {
    type: string;
    date: string;
}

export interface ComicResponse {
    id: string;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    },
    pageCount: number;
    characters: { items: ComicItem[] };
    creators: { items: ComicItem[] };
    format: string;
    diamondCode: string;
    prices: PriceItem[];
    dates: DateItem[];
}

export interface ComicState extends BaseState {
    total: number;
    items: Comic[];
    offset: number;
    formatSelected: ComicFormat;
}

export interface ComicResponsePayload {
    items: Comic[];
    total: number;
}

export const jsonToComicBuilder = (json: ComicResponse): Partial<Comic> => {
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

