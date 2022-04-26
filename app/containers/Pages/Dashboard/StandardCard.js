import React from "react";
import "./carddash.css";
import { FaUserFriends } from "react-icons/fa";
//import { FiUsers } from "react-icons/fc";
import { FaUserPlus } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

const StandardCard = () => {
  const newAddedCount = JSON.parse(localStorage.getItem("newAddedCount"));
  const totalLeadCount = JSON.parse(localStorage.getItem("totalLeadCount"));
  const totalReviewedCount = JSON.parse(
    localStorage.getItem("totalReviewedCount")
  );
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="card crad_one">
              <div class="card-body">
                <div>
                  <span className="icon_ac">
                    <FaUserFriends />{" "}
                  </span>
                </div>
                <span className="nums">
                  <h4>{totalLeadCount}</h4>
                </span>
                <h5 class="card-title">All Leads</h5>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card card_two">
              <div class="card-body">
                <div>
                  <span className="icon_ac">
                    <FaUserPlus />
                  </span>
                </div>
                <span className="nums">
                  <h4>{newAddedCount}</h4>
                </span>
                <h5 class="card-title">New Leads</h5>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card card_three">
              <div class="card-body">
                <div>
                  <span className="icon_ac">
                    {" "}
                    <FaUserEdit />{" "}
                  </span>
                </div>
                <span className="nums">
                  <h4>{totalReviewedCount}</h4>
                </span>
                <h5 class="card-title">Reviewed Leads</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StandardCard;
