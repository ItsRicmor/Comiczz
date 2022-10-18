import { ComicAPI } from "../../../constants/ComicAPI.enum";
import { ComicFormat } from "../../../constants/ComicFormatTypes.enum";
import * as HttpUtility from "../../../utils/HttpUtility";
import { ComicResponsePayload, jsonToComicBuilder } from "../models";

export interface IComicService {
    requestComics: () => Promise<ComicResponsePayload>;
}


export class ComicService implements IComicService {

    constructor(private format: ComicFormat, private offset: number) { }

    requestComics = async (): Promise<ComicResponsePayload> => {
        let url = ComicAPI.comicUrl
            .replace(":limit", "20")
            .replace(":offset", this.offset.toString())

        if (this.format !== ComicFormat.All) {
            url += `&formatType=${this.format}`;
        }
        const { data: { results, total } } = await HttpUtility.get(url);
        return {
            items: results.map((json: any) => jsonToComicBuilder(json)),
            total
        }
    };

}

