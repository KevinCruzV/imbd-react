
import axios from "axios";
import {FilmInterface} from "../Interfaces/ResponseInterface";

export default function useGetFilmList() {
    return (): Promise<FilmInterface[]> => {
        return axios.get('http://localhost:3000')
            .then(res => res.data)
    }
}
