import { ComicContainer } from "../components/ComicContainer/ComicContainer";
import { ComicFormat } from "../constants/ComicFormatTypes.enum";
import { useComicRequest } from "../hooks/useComicRequest";

type Props = {
  format: ComicFormat
}

const HomePage = ({ format}: Props) => {
  const { items, isLoading } = useComicRequest(format)
  return (
    <ComicContainer isLoading={isLoading} items={items} />
  )
}

export default HomePage;
