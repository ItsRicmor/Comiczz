import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ComicFormat } from '../constants/ComicFormatTypes.enum';
import { AppDispatch, RootState } from '../store';
import { getComics } from '../store/comics/slices/comics.effetcs';
import debounce from "lodash.debounce"

export const useComicRequest = (format: ComicFormat) => {
    const dispatch = useDispatch<AppDispatch>();
    const [offset, setOffset] = useState(0)
    const { isLoading, items } = useSelector((state: RootState) => state.comics);

    useEffect(() => {
        dispatch(getComics({ limit: 20, offset, format }));
    }, [offset])

    useEffect(() => {
        window.onscroll = debounce(() => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                setOffset(prev => prev + 20);
            }
        }, 100);
    }, [])

    return {
        isLoading,
        items
    }
}
