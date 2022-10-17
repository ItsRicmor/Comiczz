import { format } from "date-fns";
import { Button, Modal, ModalBody } from "reactstrap";
import { Comic } from "../../../store/comics/models";

import XMark from "../../../assets/images/xmark.png"
import "./ComicCardModal.scss";
import { ComicCardModalLabel } from "./ComicCardModalLabel";

type Props = {
    toggle: () => void;
    comic: Comic;
    open: boolean;
}

export const ComicCardModal = ({ open, toggle, comic }: Props) => {
    if (!comic) return null
    const dateFormated = format(new Date(comic?.releaseDate), "yyyy");
    return (
        <Modal
            centered
            isOpen={open}
            toggle={toggle}
            size="lg"
            style={{ maxWidth: '640px', width: '100%' }}
        >
            <ModalBody className="d-flex flex-row">
                <img
                    className="mr-5"
                    src={comic.thumbnail}
                    alt={comic.title}
                    height={245}
                    width={163}
                />
                <div className="d-flex flex-column justify-content-between w-100">
                    <div className="w-100 mt-2">
                        <div className="position-relative">
                            <img className="xmark" src={XMark} onClick={toggle} />
                        </div>
                        <p className="h5">{comic.title}</p>
                        <ComicCardModalLabel title="Year of release:" value={dateFormated} />
                        <ComicCardModalLabel title="Format:" value={comic.format} />
                        <ComicCardModalLabel title="Pages:" value={comic.pageCount.toString()} />
                        {comic.characters.length > 0 && <ComicCardModalLabel title="Characters:" value={comic.characters.join(", ")} />}
                        <ComicCardModalLabel title="Creators:" value={comic.creators.join(", ")} />
                        {!!comic.diamondCode && <ComicCardModalLabel title="DiamondCode:" value={comic.diamondCode} />}
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="h5 price" style={{ lineHeight: "35px" }} >€ {comic.price}</p>
                        <Button color="danger" onClick={toggle}>
                            close
                        </Button>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}
