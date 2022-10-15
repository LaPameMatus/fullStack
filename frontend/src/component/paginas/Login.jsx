import React from "react";
import "../navegacion/LoginRegister.css";
import logo from "../../assets/Logo.jpg";
import { Apiurlogin } from "../services/apirest";
import axios from "axios";

class Login extends React.Component {
  state = {
    form: {
      username: "",
      password: "",
    },
    error: false,
    errorMsg: "",
  };

  manejadorSubmit = (e) => {
    e.preventDefault();
  };

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
    let url = Apiurlogin;
    const user = {
      username: this.state.form.username,
      password: this.state.form.password,
    };
    console.log(user);
    axios.post(url, user).then((response) => {
      console.log(response);
      if (response.data.status === "ok") {
        // <Return to="/Contactos.js" />;
      } else {
        this.setState({
          error: true,
          errorMsg: response.data.message,
        });
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div class="fadeIn first">
              <br></br>
              <img
                src={logo}
                width="150px"
                border-radio="50%"
                alt="User Icon"
              />
              <br></br>
            </div>

            <form onSubmit={this.manejadorSubmit}>
              <input
                type="mail"
                className="fadeIn second"
                name="username"
                placeholder="juan@gmail.com"
                onChange={this.manejadorChange}
              />

              <input
                type="password"
                name="password"
                className="fadeIn third"
                placeholder="Password"
                onChange={this.manejadorChange}
              />
              <input
                type="submit"
                className="fadeIn fourth"
                value="Login"
                onClick={this.manejadorBoton}
              />
            </form>
            {this.state.error === true && (
              <div className="alert alert-danger" role="alert">
                {this.state.errorMsg}
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
