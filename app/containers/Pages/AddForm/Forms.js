import React, { Fragment, useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { Field, reduxForm, change } from "redux-form";
import classNames from "classnames";
import styles from "../../../components/Forms/user-jss";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import {
  TextFieldRedux,
  CheckboxRedux,
} from "../../../components/Forms/ReduxFormMUI";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import ArrowForward from "@material-ui/icons/ArrowForward";
import "../../../styles/components/vendors/editor/editor.css";

const required = (value) => (value === null ? "Required" : undefined);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email"
    : undefined;

const Forms = (props) => {
  const trueBool = true;

  const { classes, deco, LinkBtn, submitting, pristine, handleSubmit } = props;

  const obj1 = localStorage.getItem("token");
  const token = JSON.parse(obj1);
  console.log("ajit", token);
  const headers = { Authorization: `Bearer ${token}` };
  const OnClickContinuee = () => {};
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(change("Forms", "company_name", "value"));
  // }, []);
  return (
    <div className={classes.mainDiv}>
      <div className={classes.mainD}>
        <Fragment>
          <Paper className={classNames(classes.paperWrap, deco)}>
            {/* <h3>ajit</h3> */}
            <Toolbar className={classes.toolbar}>
              <div className={classes.title}>
                <Typography className={classes.title} variant="h6">
                  Add Leads
                </Typography>
              </div>
            </Toolbar>
            <section className={classes.formWrap}>
              <form onSubmit={handleSubmit}>
                {/* <div className="container"> */}
                <div className="row">
                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        required
                        validate={required}
                        type="date"
                        onFocus="(this.type='date')"
                        id="date"
                        // onblur="if(!this.value)this.type='text'"
                        name="entered_date"
                        label="Entered_Date"
                        // enable="false"
                        // placeholder="Enterd_Date"
                        // class="textbox-n"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        required
                        validate={required}
                        type="text"
                        name="company_name"
                        placeholder="Company_Name"
                        component={TextFieldRedux}
                        label="Company_Name"
                        className={classes.field}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        required
                        validate={required}
                        type="text"
                        name="industries"
                        label="Industries"
                        placeholder="Industries"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        required
                        validate={required}
                        type="size"
                        name="size"
                        label="Size"
                        placeholder="Size"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        required
                        validate={required}
                        type="number"
                        name="year"
                        label="Year"
                        placeholder="Year"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>

                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        required
                        validate={required}
                        type="text"
                        name="company_linkedin"
                        label="Company_Linkedin"
                        placeholder="Company_Linkedin"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        required
                        validate={required}
                        type="text"
                        name="website"
                        label="Website"
                        placeholder="Website"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        required
                        validate={required}
                        type="text"
                        name="specialities"
                        label="specialities"
                        placeholder="Specialities"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>

                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        required
                        validate={required}
                        type="text"
                        name="name"
                        label="Name"
                        placeholder="Name"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        required
                        validate={required}
                        type="text"
                        name="position"
                        label="Position"
                        placeholder="Position"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Email"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        type="text"
                        name="phone"
                        label="Phone"
                        placeholder="Phone"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        required
                        validate={required}
                        type="text"
                        name="linkedin"
                        label="Linkedin"
                        placeholder="Linkedin"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>

                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        required
                        validate={required}
                        type="text"
                        name="domain"
                        label="Domain"
                        placeholder="Domain"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>

                  <div className="col-md-4">
                    <FormControl className={classes.formControl}>
                      <Field
                        required
                        validate={required}
                        type="text"
                        name="country"
                        label="Country"
                        placeholder="Country"
                        component={TextFieldRedux}
                        className={classes.field}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-6">
                    <FormControl className={classes.formControl}>
                      <Field
                        type="text"
                        name="about"
                        label="About"
                        placeholder="About"
                        component={TextFieldRedux}
                        className={classes.field}
                        multiline={trueBool}
                        rows={2}
                      />
                    </FormControl>
                  </div>
                  <div className="col-md-6">
                    <FormControl className={classes.formControl}>
                      <Field
                        type="text"
                        name="reference"
                        label="Reference"
                        placeholder="Reference"
                        component={TextFieldRedux}
                        className={classes.field}
                        multiline={trueBool}
                        rows={2}
                      />
                    </FormControl>
                  </div>
                </div>
                {/* </div> */}
                <div className={classes.btnArea}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    onClick={OnClickContinuee}
                  >
                    Continue
                    <ArrowForward
                      className={classNames(
                        classes.rightIcon,
                        classes.iconSmall
                      )}
                      disabled={submitting || pristine}
                    />
                  </Button>
                </div>
              </form>
            </section>
          </Paper>
        </Fragment>
      </div>
    </div>
  );
};

Forms.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
};

const LoginFormReduxed = reduxForm({
  form: "Forms",
  enableReinitialize: true,
})(Forms);

const FormInit = connect((state) => ({
  force: state,
  initialValues: state.login.usersLogin,
  deco: state.ui.decoration,
}))(LoginFormReduxed);

export default withStyles(styles)(FormInit);
