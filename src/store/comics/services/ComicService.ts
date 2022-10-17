import { ComicAPI } from "../../../constants/ComicAPI.enum";
import { ComicFormat } from "../../../constants/ComicFormatTypes.enum";
import * as HttpUtility from "../../../utils/HttpUtility";
import { Comic, ComicPayload, jsonToComicBuilder } from "../models";

export interface IComicService {
    requestComics: () => Promise<Comic[]>;
}


export class ComicService implements IComicService {

    constructor(private payload: ComicPayload) { }

    requestComics = async () => {
        let url = ComicAPI.comicUrl
            .replace(":limit", this.payload.limit.toString())
            .replace(":offset", this.payload.offset.toString())

        if (this.payload.format !== ComicFormat.All) {
            url += `&formatType=${this.payload.format}`;
        }
        const { data: { results } } = await HttpUtility.get(url);
        return results.map((json: any) => jsonToComicBuilder(json));
    };

}

