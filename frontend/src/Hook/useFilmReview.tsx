
import {AxiosInstance} from "../Axios/AxiosInstance";
import {LocalFilmReviewInterface} from "../Interfaces/LocalFilmReviewInterface";

export default function useFilmReview() {
    return (token: string, review: LocalFilmReviewInterface) => {
        return AxiosInstance({
            url: '/post-review.php',
            method: 'post',
            data: new URLSearchParams({
                title: review.title,
                content: review.content
            })
        })
            .then((res:any) => res.data)
    }
}
