import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Comic } from "../../store/comics/models";
import { ComicCard } from "../ComicCard/ComicCard";
import { ComicCardModal } from "../ComicCard/ComicCardModal/ComicCardModal";

type Props = {
    items: Comic[];
}

export const ComicContainer = ({ items }: Props) => {
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
            <ComicCardModal open={open} comic={comicSelected as Comic} toggle={toggle} />
        </>
    )
}
