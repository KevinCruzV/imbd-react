
import {useParams} from "react-router-dom";

export default function FilmSingle() {

const {wildcard} = useParams();


return(

    <h1>{wildcard}</h1>

)};