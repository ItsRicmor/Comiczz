import { Container } from "reactstrap";

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const Content = ({ children }: Props) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
