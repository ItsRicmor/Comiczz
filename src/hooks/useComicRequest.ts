import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ComicFormat } from '../constants/ComicFormatTypes.enum';
import { AppDispatch, RootState } from '../store';
import { getComics } from '../store/comics/slices/comics.effetcs';

export const useComicRequest = (format: ComicFormat) => {
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, items, total } = useSelector((state: RootState) => state.comics);
    const [offset, setOffset] = useState(0)

    // Handle user scrolling the page
    function handleUserScroll() {
        // get scroll top value
        const scrollTop = document.documentElement.scrollTop;

        // get the entire height, including padding
        const scrollHeight = document.documentElement.scrollHeight;

        // check if user is near to the bottom of the body
        if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
            setOffset(prev => prev + 20);
        }
    }

    useEffect(() => {
        if (total === 0 || total > items.length) {
            dispatch(getComics({ limit: 20, offset, format }));
        }
    }, [offset, dispatch, total, format])

    useEffect(() => {
        window.addEventListener("scroll", handleUserScroll);
        return () => window.removeEventListener("scroll", handleUserScroll);
    }, []);

    return {
        isLoading,
        items
    }
}
