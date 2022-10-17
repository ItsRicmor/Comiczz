import { ComicCard } from "../components/ComicCard/ComicCard";
import { ComicContainer } from "../components/ComicContainer/ComicContainer";
import { ComicFormat } from "../constants/ComicFormatTypes.enum";
import { useComicRequest } from "../hooks/useComicRequest";

const HomePage = () => {
  const { items, isLoading } = useComicRequest(ComicFormat.All)
  return (
    <ComicContainer items={items} />
  )
}

export default HomePage;
