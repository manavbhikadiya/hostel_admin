import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import HostelCards from "./HostelCards";

const Home = () => {
  const [data, setData] = useState([]);
  const collegeId = localStorage.getItem("college_id");
  // const collegeId = useSelector((state) => state.adminReducer);

  console.log(collegeId);

  useEffect(() => {
    getHostelData();
  }, []);

  const getHostelData = () => {
    axios
      .get(`/hostel/getAllHostelsOfCollege/${collegeId}`)
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
      .post(`/hostel/delete/${hostel_id}`)
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
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Data Not Delete");
      });
  };

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
      <div className="row">
        {data.map((college, index) =>
          college.hostels.map((hostels, index) => {
            console.log(hostels)

            return (<HostelCards
              hostel_id ={hostels._id}
              college_id={collegeId}
              hostelName={hostels.hostel_name}
              managerName={hostels.manager_name}
              helpline_no={hostels.helpline_no}
              kms={hostels.kms}
              rooms_available={hostels.rooms_available}
              room_price={hostels.room_price}
              location={hostels.location}
              hostel_image={hostels.hostel_image}
              boys={hostels.boys}
              girls={hostels.girls}
            />)
          }
          )
        )}
      </div>
    </main>
  );
};
export default Home;
