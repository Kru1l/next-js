import {FC} from 'react';
import {IPost} from "@/interfaces/postInterface";

interface IProps {
    post: IPost
}

const Post: FC<IProps> = ({post}) => {
    let {id, userId, title, body} = post;

    return (
        <div>
            <p>ID: {id}</p>
            <p>UserId: {userId}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export {Post};