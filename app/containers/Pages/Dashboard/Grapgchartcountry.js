import axios from "axios";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { url } from "../../../../config";

function Graphchaert() {
  const [action, setAction] = useState([]);
  const obj1 = localStorage.getItem("token");
  const token = JSON.parse(obj1);
  const fun2 = () => {
    axios
      .get(url + "/getCoeCompanyCount", {
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      })
      .then((res) => {
        console.log("SucessIndustryCountry-------------->", res.data.success);
        setAction(res.data.success);
      })
      .catch((e) => {
        console.log("Error", e.response);
      });
  };
  useEffect(() => {
    fun2();
  }, []);
  action.map((elem) => {
    console.log("ajit kumar gahan", elem);
  });

  const Doughnutdata = {
    labels: action.map((x) => x.position),
    datasets: [
      {
        label: `${action.length}Ceo`,
        data: action.map((x) => x.total),
        backgroundColor: [
          "rgba(54, 162, 235)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgba(255, 99, 132)",
          "rgba(255, 206, 86)",
        ],
        //   borderColor: [
        //       'rgba(255, 99, 132, 1)',
        //       'rgba(54, 162, 235, 1)',
        //       'rgba(255, 206, 86, 1)',
        //       'rgba(75, 192, 192, 1)',
        //       'rgba(153, 102, 255, 1)',
        //       'rgba(255, 159, 64, 1)',
        //   ],
        borderWidth: 0,
        // hoverOffset: 4
      },
    ],
  };
  return (
    <>
      <Doughnut data={Doughnutdata} />
    </>
  );
}

export default Graphchaert;
