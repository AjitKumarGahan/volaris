import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styles from "dan-components/Tables/tableStyle-jss";
import TablePagination from "@material-ui/core/TablePagination";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineInfo } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import "../../../../app/styles/components/vendors/editor/editor.css";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import axios from "axios";

import Modal from "@material-ui/core/Modal";

import { url } from "../../../../config";
import * as XLSX from "xlsx";
import Addform from "../AddForm/Addform";
import Forms from "../AddForm/Forms";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
let id = 0;
function createData(name, calories, fat, carbs, protein, price) {
  id += 1;
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 500,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
};
const styyle = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 700,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
  // position: "relative",
  // bottom: "200px",
};
const stylle = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 150,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

function Row(props) {
  const [valuees, setValuees] = useState([]);
  const [open, setOpen] = React.useState("");
  const [revieww, setRevieww] = useState("");
  const [dattaa, setDattaa] = useState([]);
  const { classes } = props;
  const obj1 = localStorage.getItem("token");
  const token = JSON.parse(obj1);

  const Tablefunction = () => {
    axios
      .get(url + "/getActiveLeads?page=1&perPage=5", {
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      })
      .then((res) => {
        console.log("Sucess-------------->", res);
        localStorage.setItem(
          "newAddedCount",
          JSON.stringify(res.data.newAddedCount)
        );
        localStorage.setItem(
          "totalLeadCount",
          JSON.stringify(res.data.totalLeadCount)
        );
        localStorage.setItem(
          "totalReviewedCount",
          JSON.stringify(res.data.totalReviewedCount)
        );
        setValuees(res.data.leads.data);
      })
      .catch((e) => {
        console.log("Error", e.response);
      });
  };
  const OnClickContinuee = (iid) => {
    const Formdata = {
      reviewed: 1,
      remarks: revieww,
    };
    axios
      .post(url + `/addReview/${iid}`, Formdata, {
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      })
      .then((res) => {
        console.log("SucessReviewed-------------->", res);
        window.location.href = "/app/pages/dashboard";

        //  setValuees(res.data.leads.data);
      })
      .catch((e) => {
        console.log("Error", e.response);
      });
  };
  const handleOnDelete = (idd) => {
    axios
      .get(url + `/deleteLead/${idd}`, {
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      })
      .then((res) => {
        console.log("SucessDelete-------------->", res);
        window.location.href = "/app/pages/dashboard";
      })
      .catch((e) => {
        console.log("Error", e.response);
      });
    setValuees((olditem) => {
      return olditem.filter((arr, index) => {
        return index !== id;
      });
    });
  };
  useEffect(() => {
    Tablefunction();
    // Reviwed();
  }, []);
  const OnCLickOpen = (elemId) => {
    setOpen((prevState) => {
      console.log("prevState ", prevState);
      if (prevState === `open${elemId}`) {
        setOpen("");
        return;
      }
      setOpen(`open${elemId}`);
    });
  };

  const [openn, setOpenn] = React.useState(false);
  const [opendelte, setOpenDelte] = React.useState(false);
  const handleClose = () => setOpenn(false);
  const handleOpen = () => setOpenn(true);
  const handleCloseDelete = () => setOpenDelte(false);
  const handleOpenDelete = () => setOpenDelte(true);
  const RenderCollapase = (elem) => {
    return (
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="big" aria-label="simple table">
                <TableHead>
                  <TableRow className="tbl_des_row">
                    <b>Company Linkedin </b>
                    {elem.company_linkedin}
                  </TableRow>
                  <br />
                  <TableRow className="tbl_des_row">
                    <b>Name </b>
                    {elem.name}
                  </TableRow>
                  <br />
                  <TableRow className="tbl_des_row">
                    <b>Position </b>
                    {elem.position}
                  </TableRow>
                  <br />
                  <TableRow className="tbl_des_row">
                    <b>Email </b>
                    {elem.email}
                  </TableRow>
                  <br />
                  <TableRow className="tbl_des_row">
                    <b>Linkedin ID </b>
                    <a target="_blank" href={elem.linkedin}>
                      Linkedin
                    </a>
                  </TableRow>
                  <br />
                  <TableRow className="tbl_des_row">
                    <b>Phone No </b>
                    {elem.phone}
                  </TableRow>
                  <br />
                  <TableRow className="tbl_des_row">
                    <b>Specialities </b>
                    {elem.specialities}
                  </TableRow>
                  <br />
                  <TableRow className="tbl_des_row">
                    <b>Domain </b>
                    {elem.domain}
                  </TableRow>
                  <br />
                  <TableRow className="tbl_des_row">
                    <b>References </b>
                    {elem.reference}
                  </TableRow>
                  <br />
                  <TableRow className="tbl_des_row">
                    <b>About </b>
                    {elem.about}
                  </TableRow>
                  <br />
                  <TableRow className="tbl_des_row">
                    <b>Remark </b>
                    {elem.remarks}
                  </TableRow>
                  <br />
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <>
      {valuees.map((elem) => {
        // console.log("elem", elem);

        const date = new Date(elem.entered_date).toLocaleDateString();
        return (
          <>
            <React.Fragment>
              <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => OnCLickOpen(elem.id)}
                  >
                    {open === `open${elem.id}` ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row"></TableCell>
                {/* <TableCell align="right">{elem.id}</TableCell> */}
                <TableCell align="center" style={{ fontSize: "13px" }}>
                  {elem.company_name}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ width: "14%", fontSize: "13px" }}
                >
                  {elem.country}
                </TableCell>
                <TableCell align="center" style={{ fontSize: "13px" }}>
                  {elem.industries}
                </TableCell>
                <TableCell
                  align="center"
                  style={{ width: "10%", fontSize: "13px" }}
                >
                  {elem.size}
                </TableCell>
                <TableCell align="center" style={{ width: "10%" }}>
                  {elem.year}
                </TableCell>
                <TableCell align="center">
                  <a target="_blank" href={elem.website}>
                    Website
                  </a>
                </TableCell>
                <TableCell align="center">{date}</TableCell>
                <TableCell align="center" style={{ width: "20%" }}>
                  {/* {elem.entered_date} */}
                  <span
                    className="edit_icon"
                    onClick={() => handleOnEdit(elem.id)}
                  >
                    <FaEdit />
                    <span className="tooltiptext">Edit</span>
                  </span>
                  &nbsp; &nbsp;&nbsp;
                  <span className="info_icon" onClick={handleOpen}>
                    <BsInfoCircleFill />
                    <span className="tooltiptext">Review</span>
                  </span>
                  &nbsp; &nbsp;&nbsp;
                  <span className="delete_icon" onClick={handleOpenDelete}>
                    <MdDelete />
                    <span className="tooltiptext">Delete</span>
                  </span>
                </TableCell>
              </TableRow>

              {open === `open${elem.id}` && RenderCollapase(elem)}
            </React.Fragment>

            <div>
              <Modal
                keepMounted
                open={openn}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box sx={style}>
                  {/* <div className="mb-3 area"> */}
                  <label for="exampleFormControlTextarea1" class="form-label">
                    <b> Review</b>
                  </label>
                  <textarea
                    onChange={(e) => setRevieww(e.target.value)}
                    className="form-control border border-3  border-black textclass"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    cols="50"
                  ></textarea>
                  {/* <div className={classes.btnArea}> */}
                  <button
                    className="reviewbtn btn btn-primary btn-large"
                    variant="contained"
                    type="submit"
                    onClick={() => OnClickContinuee(elem.id)}
                  >
                    Continue
                  </button>
                  {/* </div> */}
                </Box>
              </Modal>
            </div>
            <div>
              <Modal
                keepMounted
                open={opendelte}
                onClose={handleCloseDelete}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box sx={stylle}>
                  <h4>Are you sure to Delete?</h4>
                  <button
                    type="button"
                    class="btn btn-success me-3"
                    onClick={() =>
                      (window.location.href = "/app/pages/dashboard")
                    }
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    class="btn btn-danger me-3"
                    onClick={() => handleOnDelete(elem.id)}
                  >
                    Delete
                  </button>
                </Box>
              </Modal>
            </div>
          </>
        );
      })}
    </>
  );
}

const data = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 90)];

function StrippedTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [lead, setLeads] = useState([]);
  const [opeen, setOpeen] = React.useState(false);
  const handleClosee = () => setOpeen(false);
  const handleOpenn = () => setOpeen(true);
  const { classes } = props;
  const obj1 = localStorage.getItem("token");
  const token = JSON.parse(obj1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage -
    Math.min(
      rowsPerPage,
      localStorage.getItem("totalLeadCount") - page * rowsPerPage
    );

  const handleOnExport = () => {
    axios
      .get(url + "/getActiveLeads", {
        headers: {
          "X-ACCESS-TOKEN": token,
        },
      })
      .then((res) => {
        console.log("SucessExport-------------->", res.data.leads);
        setLeads(res.data.leads);
      })
      .catch((e) => {
        console.log("Error", e.response);
      });
    const newData = lead.map((row) => {
      delete row.id;
      return row;
    });
    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Volarish");
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workBook, "leadd.xlsx");
  };
  const handleOnImport = (values) => {
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
      .post(url + "/getActiveLeads", formData, {
        headers: {
          "Content-Type": "application/json",
          "X-ACCESS-TOKEN": token,
        },
      })
      .then((res) => {
        console.log("SucessImport-------------->", res);
      })
      .catch((e) => {
        console.log("Error", e.response);
      });
  };
  return (
    <>
      <Fragment>
        {/* <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <Typography className={classes.title} variant="h6">
              Nutrition
            </Typography>
          </div>
        </Toolbar> */}

        <div class="dropdown">
          <span
            className=" dots_main"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsThreeDots />
          </span>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a class="dropdown-item" href="#" onClick={handleOnExport}>
                Export Data
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Import
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#" onClick={handleOpenn}>
                Add Company Data
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.rootTable}>
          <Table
            className={classNames(classes.table, classes.stripped)}
            aria-label="collapsible table"
            style={{ width: "auto", tableLayout: "auto" }}
          >
            <TableHead>
              <TableRow style={{ backgroundColor: "#F2F3F4 " }}>
                <TableCell padding="right"></TableCell>
                <TableCell padding="normal"></TableCell>
                <TableCell
                  align="center"
                  style={{ width: "15%", color: "#01579b" }}
                >
                  Company
                </TableCell>
                <TableCell
                  align="center"
                  style={{ width: "12%", color: "#01579b" }}
                >
                  Country
                </TableCell>
                <TableCell
                  align="center"
                  style={{ width: "12%", color: "#01579b" }}
                >
                  Industry
                </TableCell>
                <TableCell
                  align="center"
                  style={{ width: "10%", color: "#01579b" }}
                >
                  Size
                </TableCell>
                <TableCell align="center" style={{ color: "#01579b" }}>
                  Year
                </TableCell>
                <TableCell
                  align="center"
                  style={{ width: "12%", color: "#01579b" }}
                >
                  Website
                </TableCell>
                <TableCell
                  align="center"
                  style={{ width: "10%", color: "#01579b" }}
                >
                  Added
                </TableCell>
                <TableCell align="center" style={{ color: "#01579b" }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <Row key={row.name} row={row} />
                ))}
              {/* {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={localStorage.getItem("totalLeadCount")}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <div className="box_info"></div>
      </Fragment>
      <div>
        <Modal
          keepMounted
          open={opeen}
          onClose={handleClosee}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={styyle}>
            <div>
              <Addform />
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

StrippedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StrippedTable);
