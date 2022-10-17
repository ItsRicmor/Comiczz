import { BreadCrumbs } from './Breadcrumbs/BreadCrumbs';
import { Content } from './Content';
import { Header } from './Header/Header'

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <BreadCrumbs />
            <Content>{children}</Content>
        </div>
    )
}
