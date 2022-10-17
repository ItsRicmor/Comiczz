import { ComicAPI } from "../../../constants/ComicAPI.enum";
import { ComicFormat } from "../../../constants/ComicFormatTypes.enum";
import * as HttpUtility from "../../../utils/HttpUtility";
import { ComicPayload, ComicResponsePayload, jsonToComicBuilder } from "../models";

export interface IComicService {
    requestComics: () => Promise<ComicResponsePayload>;
}


export class ComicService implements IComicService {

    constructor(private payload: ComicPayload) { }

    requestComics = async (): Promise<ComicResponsePayload> => {
        let url = ComicAPI.comicUrl
            .replace(":limit", this.payload.limit.toString())
            .replace(":offset", this.payload.offset.toString())

        if (this.payload.format !== ComicFormat.All) {
            url += `&formatType=${this.payload.format}`;
        }
        const { data: { results, total } } = await HttpUtility.get(url);
        return {
            items: results.map((json: any) => jsonToComicBuilder(json)),
            total
        }
    };

}

