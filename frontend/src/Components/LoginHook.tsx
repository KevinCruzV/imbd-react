import HideIfLogged from "./HideIfLogged";
import HideIfNotLogged from "./HideIfNotLogged";
import {useState} from "react";
import {LoginResponseInterface} from "../Interfaces/ResponseInterface";

export default function LoginHook() {

    const [log, setLog] = useState<LoginResponseInterface>({
    status: 'error',
    token: "",
    username: ""
})

return(
    <>
        <HideIfLogged loggedUser={log}>
            <div>Not log</div>
        </HideIfLogged><HideIfNotLogged loggedUser={log}>
        <div>log</div>
    </HideIfNotLogged>
    </>
)};