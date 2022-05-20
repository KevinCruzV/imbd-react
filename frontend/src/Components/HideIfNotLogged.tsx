import {LoginResponseInterface} from '../Interfaces/ResponseInterface';

interface HideIfLoggedPropsInterface {
    loggedUser: LoginResponseInterface,
    children: any
}

export default function HideIfLogged({loggedUser, children}: HideIfLoggedPropsInterface) {
    if (!loggedUser.token) {
        return <></>
    }
    return children
}