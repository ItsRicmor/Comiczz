import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ComicFormat } from './constants/ComicFormatTypes.enum';
import { RoutesMap } from './constants/RoutesMap.enum';

const ComicPage = React.lazy(() => import('./pages/comic.page'))

export const Main = () => {
    return (
        <Routes>
            <Route path={RoutesMap.Home} element={<ComicPage format={ComicFormat.All} />} />
            <Route path={RoutesMap.Comic} element={<ComicPage format={ComicFormat.Comic} />} />
            <Route path={RoutesMap.Magazine} element={<ComicPage format={ComicFormat.Magazine} />} />
            <Route path={RoutesMap.DigitalComic} element={<ComicPage format={ComicFormat.DigitalComic} />} />
        </Routes>
    );
}
