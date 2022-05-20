import {useNavigate} from "react-router-dom";

export default function SearchForm() {

    const navigate = useNavigate();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        let target = e.target.firstChild.value;
        navigate(target)
    }

return(

    <form onSubmit={handleSubmit}>
        <input type="text" className="form-control"/>
    </form>

)};