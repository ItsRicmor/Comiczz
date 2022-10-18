import { ComicState } from "./comics/models"

export interface BaseState {
    isLoading: boolean
}
export interface ApplicationState {
    comics: ComicState
}
