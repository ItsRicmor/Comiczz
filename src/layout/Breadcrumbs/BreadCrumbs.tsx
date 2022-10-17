import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import { v4 as uuidv4 } from 'uuid';

export const BreadCrumbs = () => {
    const breadcrumbs = useReactRouterBreadcrumbs();
    return (
        <Container>
            <Breadcrumb listTag="div">
                {breadcrumbs.map(({ breadcrumb }) => (
                    <BreadcrumbItem
                        key={uuidv4()}
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
