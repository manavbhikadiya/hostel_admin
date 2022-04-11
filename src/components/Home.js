import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { getCollegeId, getAdminId } from "../services/getCookies.service";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const Home = () => {
  const [data, setData] = useState([]);
  const [collegeId, setCollegeID] = useState(null);
  var college_id = null;
  useEffect(() => {
    college_id = getCollegeId();
    setCollegeID(college_id);
    getHostelData();
  }, []);

  const getHostelData = () => {
    axios
      .get(`http://localhost:8000/hostel/getAllHostelsOfCollege/${college_id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        alert("Data Not found");
      });
  };

  const history = useHistory();
  const deleteHostel = (hostel_id) => {

    axios
      .post(`http://localhost:8000/hostel/delete/${hostel_id}`)
      .then(() => {
        toast.error("Your Hostel is Deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        history.push('/')
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
        alert("Data Not Delete");
      })
  }

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Default Table</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Hostel Name</th>
                <th scope="col">Rooms</th>
                <th scope="col">Price/Year</th>
                <th scope="col">Location</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((college, index) =>
                college.hostels.map((hostels, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{hostels.hostel_name}</td>
                    <td>{hostels.rooms_available}</td>
                    <td>{hostels.room_price}</td>
                    <td>{hostels.location}</td>
                    <td>
                      <span onClick={() => deleteHostel(hostels._id)}>
                        <i class="fa fa-trash" style={{ color: "red", cursor: "pointer" }}></i>
                      </span>
                      <NavLink to={`/updateHostel?college_id=${collegeId}&hostel_id=${hostels._id}`}>
                        <i
                          class="fa fa-edit"
                          style={{ marginLeft: "20px", color: "black" }}
                        ></i>
                      </NavLink>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
export default Home;
