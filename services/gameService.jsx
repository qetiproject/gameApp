import axios from "axios"
import { environment } from "../environments/environment"

const key = 'c542e67aec3a4340908f9de9e86038af'

export const getGamesData = (size, page) => {

    const gamesDataUrl = environment.GamesDataUrl

    return axios.get(`${gamesDataUrl}?discover=true&ordering=-relevance&page_size=${size}&page=${page}&key=${key}`)
}