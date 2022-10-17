import { Content } from './Content';
import { Header } from './Header/Header'

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <Content>{children}</Content>
        </div>
    )
}
