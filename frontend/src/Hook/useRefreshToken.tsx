// @ts-ignore
import axios from "axios";
// @ts-ignore
import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";

export default function useRefreshToken() {
    return (): Promise<LoginResponseInterface> => {
        return axios.get('http://localhost:3000/refresh-token.php', {
            withCredentials: true
        }).then(res => {
            console.log(res.data)
            return res.data
        })
    }
}
