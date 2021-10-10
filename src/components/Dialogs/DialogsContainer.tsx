// eslint-disable-next-line no-unused-vars
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {actions} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {...actions})
)(Dialogs);
