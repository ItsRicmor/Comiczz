import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ComicFormat } from '../constants/ComicFormatTypes.enum';
import { AppDispatch, RootState } from '../store';
import { getComics } from '../store/comics/slices/comics.effetcs';
import { nextPage } from '../store/comics/slices/index.slices';

export const useComicRequest = (format: ComicFormat) => {
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, items, total, offset } = useSelector((state: RootState) => state.comics);


    // Handle user scrolling the page
    function handleUserScroll() {
        // get scroll top value
        const scrollTop = document.documentElement.scrollTop;

        // get the entire height, including padding
        const scrollHeight = document.documentElement.scrollHeight;

        // check if user is near to the bottom of the body
        if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
            dispatch(nextPage())
        }
    }
    useEffect(() => {
        if (total === 0 || total > items.length) {
            debugger
            dispatch(getComics(format));
        }
    }, [dispatch, total, format, offset])

    useEffect(() => {
        window.addEventListener("scroll", handleUserScroll);
        return () => window.removeEventListener("scroll", handleUserScroll);
    }, []);

    return {
        isLoading,
        items
    }
}
