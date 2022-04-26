import React, { useState } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { LoginForm } from "dan-components";
import styles from "dan-components/Forms/user-jss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { url } from "../../../../config";
// import env from "dotenv";

function Login(props) {
  const [valueForm, setValueForm] = useState(null);
  const history = useHistory();
  // console.log(process.env);
  const submitForm = (values) => {
    const formData = {
      email: values.email,
      password: values.password,
    };
    axios
      .post(url + "/login", formData)
      .then((res) => {
        console.log("response", res);
        if (res.data.message === "logged in successfuly") {
          localStorage.setItem(
            "token",
            JSON.stringify(res.data.token.access_token)
          );
          // window.location.href = "/app";

          window.location.href = "/app/pages/dashboard";
          // history.push({
          //   pathname: "/app",
          //   state: res,
          // });
        }
      })
      .catch((e) => {
        console.log("Error", e.response.message);
      });
    // setTimeout(() => {
    //   setValueForm(values);
    //   console.log(`You submitted:\n\n${valueForm}`);
    //   // window.location.href = "/app";
    // }, 500); // simulate server latency
  };

  const title = brand.name + " - Login";
  const description = brand.desc;
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className={classes.container}>
        <div className={classes.userFormWrap}>
          <LoginForm onSubmit={(values) => submitForm(values)} />
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
