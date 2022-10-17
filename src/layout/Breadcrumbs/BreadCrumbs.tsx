import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';

export const BreadCrumbs = () => {
    const breadcrumbs = useReactRouterBreadcrumbs();
    return (
        <Container>
            <Breadcrumb listTag="div" i>
                {breadcrumbs.map(({ breadcrumb }) => (
                    <BreadcrumbItem
                        active
                        tag="span"
                    >
                        {breadcrumb}
                    </BreadcrumbItem>
                ))}
            </Breadcrumb>
        </Container>
    )
}
