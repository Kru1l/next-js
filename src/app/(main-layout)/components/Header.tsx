import {FC} from 'react';
import Link from "next/link";

import styles from './Header.module.css';

interface IProps {

}

const Header: FC<IProps> = () => {

    return (
        <div className={styles.Header}>
            <Link href={'/users'}>Users</Link>
            <Link href={'/posts'}>Posts</Link>
        </div>
    );
};

export {Header};