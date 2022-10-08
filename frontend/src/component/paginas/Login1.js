import React from "react";
import Register from "./Register";
import "../navegacion/login.css";
import { LoginUser } from "../services/apiCall";
import axios from "axios";

class Login1 extends React.Component {
  state = {
    form: {
      username: "",
      password: "",
    },
    error: false,
    errorMsg: "",
  };

  manejadorSubmitt = (e) => {
    e.preventDefault();
  };

  //manipulando los imputs
  manejadorChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };

  manejadorBoton = () => {
    let url = LoginUser + "login";
    axios.post(url, this.state.form).them((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <React.Fragment>
        <form onChange={this.manejadorSubmitt}>
          <br></br>
          <h1>Login1</h1>
          <div className="form-outline mb-4">
            <input
              type="email"
              name="username"
              className="form-control"
              onChange={this.manejadorChange}
            />
            <label className="form-label" for="username">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={this.manejadorChange}
            />
            <label className="form-label" for="password">
              Password
            </label>
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label className="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block mb-4 boton"
            onClick={this.manejadorBoton}
          >
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member?{Register}
              <a href="http://localhost:3001/frontend/src/component/paginas/Register.js">
                Register
              </a>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button
              type="button"
              classNameName="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-google"></i>
            </button>

            <button
              type="button"
              classNameName="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-twitter"></i>
            </button>

            <button
              type="button"
              classNameName="btn btn-link btn-floating mx-1"
            >
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default Login1;
