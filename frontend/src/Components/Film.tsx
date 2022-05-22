// @ts-ignore
import {FilmInterface} from "../Interface/ResponsesInterfaces";

export default function Film({film}: { film: FilmInterface }) {
    return (
        <div className='bg-light rounded p-3 mb-3'>
            <h3>{film.title}</h3>
            <p>
                <small>
                    Par : {film.author}
                    <br/>
                    Le : {film.date}
                </small>
            </p>
            <p>{film.content}</p>
        </div>
    )
}
