import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/dialogs/1">Eduard</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Igor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Vova</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Olya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Yulya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Igor</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;