import React from "react";
import {Link} from "react-router";
import serialize from "form-serialize";
import * as axios from "axios";

export default class Login extends React.Component {
    componentWillMount() {
        this.state = {mode: 0};
        if (localStorage.getItem("userId") !== null) {
            this.setState({mode: 2});
        }
    }

    handleSubmit(event) {
        event.preventDefault();

    }

    getFormData(event) {
        const target = event.target;

        return serialize(target, {hash: true});
    }

    getForm() {
        return (
            <form onSubmit={event => this.handleSubmit(event)} className="Form navbar-form">
                <div className="form-row">
                    <label htmlFor="login-form" className="form-label">Login</label>
                    <input className="form-control form-input-control"
                           id="login-input" required type="text" name="login" placeholder="Login"/>
                </div>
                <div className="form-row">
                    <label htmlFor="password-input" className="form-label">Password</label>
                    <input className="form-control form-input-control"
                           id="password-input" required type="text" name="password" placeholder="Password"/>
                </div>
                <input type="submit" className="btn btn-primary" value="Log in"/>
            </form>
        )
    }

    getHomePageLink() {
        return (
            <Link className="menu-item-link" to="/">
                Back to Homepage
            </Link>
        );
    }

    render() {
        const formTemplate = this.getForm();

        switch (this.state.mode) {
            case 0:
                return formTemplate;
            case 1:
                return (
                    <div>
                        <div className="alert alert-success">Succesfully logged in!</div>
                        {this.getHomePageLink()}
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className="alert alert-warning">You are already logged in!</div>
                        {this.getHomePageLink()}
                    </div>
                );
            case -1:
                return (
                    <div>
                        <div className="alert alert-danger">Enter a valid credentials</div>
                        {formTemplate}
                    </div>
                );
            case -2:
                return (
                    <div>
                        <div className="alert alert-danger">Dziwny błąd</div>
                        {formTemplate}
                    </div>
                );
            case -10:
                return <div>Loading</div>;
        }
    }
}