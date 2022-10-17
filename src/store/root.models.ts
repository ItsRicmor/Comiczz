import { ComicState } from "./comics/models"

export interface BaseState {
    hasError: boolean
    isLoading: boolean
    error: Error | string
}
export interface ApplicationState {
    comics: ComicState
}
