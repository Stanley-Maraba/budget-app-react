import React from "react";

function Register (props) {

    return (
        <form>
            <div className="form-group">
                <label htmlFor="username">username</label>
                <div className="field">
                    <input
                        id="username"
                        type="text"
                        onChange={props.onRegisterChange}
                        name="username"
                        className="form-control"
                        value={props.register.username}
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="password">password</label>
                <div className="field">
                    <input
                        id="password"
                        type="text"
                        onChange={props.onRegisterChange}
                        name="password"
                        className="form-control"
                        value={props.register.password}
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="income">income</label>
                <div className="field">
                    <input
                        id="income"
                        type="text"
                        onChange={props.onRegisterChange}
                        name="income"
                        className="form-control"
                        value={props.register.income}
                    />
                </div>
            </div>

            <button className="btn btn-primary">REGISTER</button>

        </form>
    )
}

export default Register;