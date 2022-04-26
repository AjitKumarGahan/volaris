import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import { PapperBlock } from "dan-components";
import StrippedTable from "../Table/StrippedTable";
import Forms from "./Forms";
import axios from "axios";
// import env from "dotenv";
import { url } from "../../../../config";
import { change } from "redux-form";
import { useDispatch } from "react-redux";

function Addform() {
  const obj1 = localStorage.getItem("token");
  const token = JSON.parse(obj1);
  const title = brand.name + " - AddForm";
  const description = brand.desc;
  const submitForm = (values) => {
    const formData = {
      company_name: values.company_name,
      name: values.name,
      position: values.position,
      email: values.email,
      linkedin: values.linkedin,
      entered_date: values.entered_date,
      phone: values.phone,
      company_linkedin: values.company_linkedin,
      industries: values.industries,
      specialities: values.specialities,
      domain: values.domain,
      website: values.website,
      country: values.country,
      year: values.year,
      size: values.size,
      reference: null,
      about: values.about,
      reviewed: null,
      remarks: null,
      created_by: 1,
    };
    console.log("form---->", formData);
    axios
      .post(url + "/createLead", formData, {
        headers: {
          "Content-Type": "application/json",
          "X-ACCESS-TOKEN": token,
        },
      })
      .then((res) => {
        console.log("Sucess-------------->", res);
        window.location.href = "/app/pages/dashboard";
      })
      .catch((e) => {
        console.log("Error", e.response);
      });
  };
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(change("Forms", "company_name", "ajia"));
  // }, []);
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      {/* <PapperBlock
        title="Statistic Chart"
        icon="ion-ios-stats-outline"
        desc=""
        overflowX
      > */}
      <div>
        <Forms onSubmit={(values) => submitForm(values)} />
      </div>
    </div>
  );
}

export default Addform;
