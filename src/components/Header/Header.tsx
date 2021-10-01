import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://www.vhv.rs/dpng/d/483-4839905_logo-no-background-grey-large-transparent-background-cool.png"
                alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;