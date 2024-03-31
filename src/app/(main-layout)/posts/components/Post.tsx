import {FC} from 'react';
import {IPost} from "@/interfaces/postInterface";
import Link from "next/link";

interface IProps {
    post: IPost
}

const Post: FC<IProps> = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div>
            <p>ID: {id}</p>
            <p>UserId: {userId}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <Link href={`/posts/${id}/comments`}>Comments of Post</Link>
        </div>
    );
};

export {Post};