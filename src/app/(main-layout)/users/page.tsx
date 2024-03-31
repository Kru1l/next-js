import {FC} from 'react';
import type {Metadata} from "next";

import {Users} from "@/app/(main-layout)/users/components/Users";

export const metadata: Metadata = {
    title: "Users",
};

interface IProps {

}

const UsersPage: FC<IProps> = async () => {
    // const {data} = await userService.getAll();

    return (
        <div>
            {/*<Users users={data}/>*/}
            <Users/>
        </div>
    );
};

export default UsersPage;