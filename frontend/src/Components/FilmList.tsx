
import Blog from "./Film";
import {FilmInterface} from "../Interfaces/ResponseInterface";

export default function FilmList({filmlist}: { filmlist: FilmInterface[] }) {
    return (
        <div className='p-5'>
            <h1 className='text-center mb-5'>Tous les blogs</h1>
            {filmlist.map((blog: FilmInterface) => (
                <FilmList filmlist={filmlist} key={blog.id}/>
            ))}
        </div>
    )
}
