'use client'

import {FC, PropsWithChildren} from 'react';

import {Header} from "@/app/(main-layout)/components/Header";
import {Provider} from "react-redux";
import {store} from "@/store/store";

interface IProps extends PropsWithChildren {

}

const Layout: FC<IProps> = ({children}) => {

    return (
        <div>
            <Header/>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    );
};

export default Layout;