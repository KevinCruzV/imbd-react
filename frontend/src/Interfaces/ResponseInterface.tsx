export type StatusType = 'error' | 'success';

export interface LoginResponseInterface {
    status: StatusType,
    message?: string,
    token?: string,
    username?: string
}

export interface ReviewPostResponseInterface {
    status: StatusType,
    message: string
}

export interface FilmInterface {
    id?: number,
    date: string,
    title: string,
    resume: string,
    realisateur: string,
    img: string
}

export interface ReviewInterface {
    id?: number,
    date: string,
    title: string,
    content: string,
    author: string
}