import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Axios from "axios";

// let imgUrl = "/loginPage.jpg";
// let styles = {
//   root: {
//     backgroundImage: "url(" + imgUrl + ")",
//     backgroundSize: "cover",
//     overflow: "hidden"
//   }
// };

class Login extends Component {
  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: "", responseData: [] };
  }

  logout = () => {
    this.setState({ isAuthenticated: false, token: "", user: null });
    window.location.href = "/";
  };

  googleResponse = googleResponse => {
    var header = {
      headers: {
        Gtoken: googleResponse.getAuthResponse().id_token,
        "Access-Control-Allow-Origin": "*"
      }
    };

    Axios.get("http://192.168.3.18:8080/v2/login", header)
      .then(responses => {
        this.setState({ responseData: responses.data })
        window.localStorage.setItem(
          "Gtoken",


          );

        console.log(this.state.responseData);

        // let token = window.localStorage.getItem("Gtoken");

        // console.log(token);
        // let data = JSON.stringify(responseText);

        // console.log("Signed in as: " + data);
        // let res = JSON.parse(data);
        // console.log(res);

        // let uid = res.data.userId;
        // console.log(uid);
        // window.localStorage.setItem("userId", uid);
        // let userid = window.localStorage.getItem("userId");
        // console.log(userid);
        // let view = res.data.view;
        // console.log(view);

        // if (view === "HR") {
        //   window.location.href = "/Toolbarhr";
        // } else {
        //   window.location.href = "/ToolbarEmp";
        // }

        //window.location.href = "/ToolbarEmp";
      });
  };
  onFailure = error => {
    console.log("****************");
    alert(error);
  };

  render() {
    let content = !!this.state.isAuthenticated ? (
      <div>
        <p>Authenticated</p>

        <div>{this.state.user.email}</div>
        <div>
          <GoogleLogout
            clientId="467598396544-usbqpbfg4h2v6282tdr64dgim05klu5v.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={this.logout}
          />
        </div>
      </div>
    ) : (
        <div className="body">
          <div className="login">
            <h1>Welcome To Document Management System</h1>
            <h2>Login To access documents</h2>
            {/* <img src={loginPage} /> */}

            <GoogleLogin
              clientId="467598396544-usbqpbfg4h2v6282tdr64dgim05klu5v.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.googleResponse}
              onFailure={this.onFailure}
            />
          </div>
        </div>
      );

    return <div className="App">{content}</div>;
  }
}

export default Login;
