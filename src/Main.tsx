import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesMap } from './constants/RoutesMap.enum';
import { ComicPage } from './pages/comic.page';
import { DigitalComicPage } from './pages/digital-comic.page';
import { MagazinePage } from './pages/magazine.page';

const HomePage = React.lazy(() => import('./pages/home.page'))

export const Main = () => {
    return (
        <Routes>
            <Route path={RoutesMap.Home} element={<HomePage />} />
            <Route path={RoutesMap.Comic} element={<ComicPage />} />
            <Route path={RoutesMap.Magazine} element={<MagazinePage />} />
            <Route path={RoutesMap.DigitalComic} element={<DigitalComicPage />} />
        </Routes>
    );
}
