import { useState } from "react";
import { Spinner } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';

import { Comic } from "../../store/comics/models";
import { ComicCard } from "../ComicCard/ComicCard";
import { ComicCardModal } from "../ComicCard/ComicCardModal/ComicCardModal";

type Props = {
    items: Comic[];
    isLoading: boolean;
}

export const ComicContainer = ({ items, isLoading }: Props) => {
    const [open, setOpen] = useState(false);
    const [comicSelected, setComicSelected] = useState<Comic | null>(null);

    const toggle = () => setOpen(!open);

    const onOpenComic = (comic: Comic) => {
        setComicSelected(comic);
        toggle();
    };

    return (
        <>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    items.map(item => (
                        <ComicCard key={item.id + uuidv4()} {...item} onOpen={onOpenComic} />
                    ))
                }
            </div>
            {
                isLoading && (
                    <div className="d-flex justify-content-center align-items-center w-100 mt-3 mb-5">
                        <Spinner>
                            Loading...
                        </Spinner>
                    </div>
                )
            }
            <ComicCardModal open={open} comic={comicSelected as Comic} toggle={toggle} />
        </>
    )
}
