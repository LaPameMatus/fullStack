import React from "react";
import "../navegacion/LoginRegister.css";
import logo from "../../component/img/logo.jpg";
import { Apiurl } from "../services/apirest";
import axios from "axios";

class Register extends React.Component {
  state = {
    form: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
    error: false,
    errorMSg: "",
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
    let url = Apiurl;
    const user = {
      name: this.state.form.username,
      email: this.state.form.email,
      phone: this.state.form.phone,
      password: this.state.form.password,
    };
    console.log(user);
    axios.post(url, user).then((response) => {
      console.log(response);
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
                type="text"
                className="fadeIn second"
                name="username"
                placeholder="Usuario"
                onChange={this.manejadorChange}
              />

              <input
                type="mail"
                className="fadeIn second"
                name="email"
                placeholder="juan@gmail.com"
                onChange={this.manejadorChange}
              />

              <input
                type="tel"
                className="fadeIn second"
                name="phone"
                placeholder="+511 154245"
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
                value="Register"
                onClick={this.manejadorBoton}
              />
            </form>

            <div id="formFooter"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
