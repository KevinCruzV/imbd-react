import {BrowserRouter, Routes, Route, Link, useNavigate, NavLink} from "react-router-dom";
import {useEffect, useReducer, useState} from "@types/react";
import {LoginResponseInterface} from "./Interfaces/ResponseInterface";
import {configureStore} from "@reduxjs/toolkit";
import {UserInterface} from "./Interfaces/UserInterface";
import HideIfLogged from "./Components/HideIfLogged";
import HideIfNotLogged from "./Components/HideIfNotLogged";
import LoginForm from "./Components/Login";
import useLogin from "./Hook/useLogin";
import useGetCookies from "./Hook/useGetCookies";
import useEraseCookie from "./Hook/useEraseCookie";
import NeedAuth from "./Components/NeedAuth";
import FilmList from "./Components/FilmList";
import useGetFilmList from "./Hook/useGetFilmList";

export const store = configureStore({
    reducer: {
        register: Register,
        signin: SigninReducer
    }
})



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
    const getMovieList = useGetFilmList();
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





    return(
        <BrowserRouter>


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

                            <FilmList filmlist={movieList} />
                        </NeedAuth>
                    } />
                    <Route path="/" element={<FilmList filmlist={movieList}/>} />
                    <Route path="/mes-posts/" element={
                        <NeedAuth>
                            <FilmList filmlist={movieList} />
                        </NeedAuth>
                    } />
                    <Route path="/autres-posts/" element={
                        <NeedAuth>
                            <MovieList movieList={movieList} />
                        </NeedAuth>
                    } />
                </Routes>
            </div>
        </BrowserRouter>
)};