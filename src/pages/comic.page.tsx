import { ComicFormat } from "../constants/ComicFormatTypes.enum";
import { useComicRequest } from "../hooks/useComicRequest";

export const ComicPage = () => {
  useComicRequest(ComicFormat.All)

  return (
    <div>comic.page</div>
  )
}
