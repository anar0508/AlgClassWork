import React from 'react';
import { connect } from 'react-redux';
import LoginContainer from './Login/LoginContainer';
import MenuContainer from './Menu/MenuContainer';
import RegistrationContainer from './Registration/RegistrationContainer';
import {Route} from "react-router-dom";

function App(props) {
    const { name, surname, email, password } = props;

    return (
        <main>
            <MenuContainer />
            <Route path="/register" exact>
                <RegistrationContainer />
            </Route>
            <Route path="/login" exact>
                <LoginContainer />
            </Route>

            <div>{`${name} ${surname}`} </div>

            <div>{`${email} ${password}`} </div>
        </main>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.login.firstName,
        surname: state.login.secondName,
        email: state.registration.email,
        password: state.registration.password
    }
}


export default connect(mapStateToProps)(App);
