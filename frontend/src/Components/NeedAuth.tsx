
import useGetCookies from "../Hook/useGetCookies";


export default function NeedAuth({children}) {
    const jwt = useGetCookies();

    if (jwt.hetic) {
        return children;
    } else {
        return <></>;
    }
}