import {BrowserRouter, Routes, Route, Link, useNavigate, NavLink} from "react-router-dom";
import Home from "./Components/Home";
import LoginHook from "./Components/LoginHook";
import FilmSingle from "./Components/FilmSingle";
import SearchForm from "./Components/SearchForm";
import Films from "./Components/Films";
import Page404 from "./Components/Page404";
import {useEffect, useReducer, useState} from "@types/react";
import {LoginResponseInterface} from "./Interfaces/ResponseInterface";
import {configureStore} from "@reduxjs/toolkit";
import {UserInterface} from "./Interfaces/UserInterface";
import HideIfLogged from "./Components/HideIfLogged";
import LoginForm from "./Components/Login";
import * as PropTypes from "prop-types";

export const store = configureStore({
    reducer: {
        register: Register,
        signin: SigninReducer
    }
})

function CommentForm(props) {
    return null;
}

CommentForm.propTypes = {
    setNeedsUpdate: PropTypes.any,
    loggedUser: PropTypes.any
};
export default function Router() {

    const [loggedUser, setLoggedUser] = useState<LoginResponseInterface>({
        status: 'error',
        token: "",
        username: ""
    })
    const[logout, dispatchLogout] = useReducer(SigninReducer, loggedUser)
    // @ts-ignore
    // const[register, dispatchRegister] = useReducer(RegisterReducer, needsLogin)
    const [localUser, setLocalUser] = useState<UserInterface>({ password: "", username: "" })
    const [movieList, setMovieList] = useState<MovieInterface[]>([])
    // Determines if the user wants to LogIn or to Register
    const [needsLogin, setNeedsLogin] = useState<boolean>(true)
    const [needsUpdate, setNeedsUpdate] = useState<boolean>(false)

    const login = useLogin();
    // const register = useRegister();
    const getMovieList = useGetMovieList();
    const cookies = useGetCookies();
    const eraseCookie = useEraseCookie();

    useEffect(() => {
        if (Object.keys(cookies).includes('token') && Object.keys(cookies).includes('username')) {
            console.log('got cookies !', loggedUser)
            setLoggedUser(prev => ({
                ...prev,
                username: cookies.username,
                token: cookies.token
            }))
        }
    }, [])

    useEffect(callback => {
        if (needsLogin && localUser.username !== '') {
            console.log('login ?')
            login(localUser.username, localUser.password)
                .then(data => setLoggedUser(data))
        } else if (!needsLogin && localUser.username !== '') {
            console.log('register ?', localUser.username)
            //@ts-ignore
            register(localUser.username, localUser.password)
                //@ts-ignore
                .then(data => setLoggedUser(data))
        }
    }, [localUser])

    useEffect(() => {
        getMovieList()
            .then(data => {
                setMovieList(data)
                setNeedsUpdate(false)
            })
    }, [needsUpdate])

    const handleDisconnect = () => {
        dispatchLogout({type:"Logout"});
        //@ts-ignore
        setLoggedUser(logout);

    }

    const [count, dispatch] = useReducer(Reducer, 0);



    return(
        <BrowserRouter>

            <Gigabar movieList={movieList}/>
            <div className='container mt-5'>
                <HideIfLogged loggedUser={loggedUser}>
                    <LoginForm setLocalUser={setLocalUser} needsLogin={needsLogin} setNeedsLogin={setNeedsLogin} />
                </HideIfLogged>

                <HideIfNotLogged loggedUser={loggedUser}>
                    <button className='btn btn-danger d-block mx-auto mb-3' onClick={handleDisconnect}>Disconnect</button>
                    <CommentForm loggedUser={loggedUser} setNeedsUpdate={setNeedsUpdate} />
                </HideIfNotLogged>

                <Routes>
                    <Route path='/' element={
                        <NeedAuth>

                            <MovieList movieList={movieList} />
                        </NeedAuth>
                    } />
                    <Route path="/" element={<MovieList movieList={movieList} />} />
                    <Route path="/mes-posts/" element={
                        <NeedAuth>
                            <MovieList movieList={movieList} />
                        </NeedAuth>
                    } />
                    <Route path="/autres-posts/" element={
                        <NeedAuth>
                            <MovieList movieList={movieList} />
                        </NeedAuth>
                    } />
                </Routes>
                <div>
                    <h1>Compteur : {count}</h1>
                    <button onClick={() => dispatch({type: 'INCREMENT'})}>J'ajoute des trucs</button>
                </div>
            </div>
        </BrowserRouter>
)};