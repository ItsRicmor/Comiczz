import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import { Comic } from '../../store/comics/models'

import "./ComicCard.scss"

export interface Props extends Comic {
    onOpen: (comic: Comic) => void;
}

export const ComicCard = ({ onOpen, ...comic }: Props) => {
    const { thumbnail, title, price } = comic
    return (
        <Card className="comic-card mb-3">
            <CardBody className="d-flex justify-content-center flex-column">
                <img
                    alt={title}
                    src={thumbnail}
                    width="100%"
                    height={255}
                />
                <CardTitle tag="h5" className="d-flex justify-content-center">
                    {title}
                </CardTitle>
                <CardText className="d-flex justify-content-center">
                    € {price}
                </CardText>
                <Button color="danger" onClick={() => onOpen(comic)}>
                    More info
                </Button>
            </CardBody>
        </Card >
    )
}
