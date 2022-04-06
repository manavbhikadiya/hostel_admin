import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);

    const getHostelData = () => {
        axios.get('http://localhost:8000/hostels/6244389382158a0a2cbe02ae')
            .then((res) => {
                setData(res.data);
            })
            .catch((e) => {
                alert('Data Not found');
            })
    }
    console.log(data);
    useEffect(() => {
        getHostelData();
    }, []);

    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
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
                            {
                                data.map((college, index) => (
                                    college.hostels.map((hostels, index) => (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{hostels.hostel_name}</td>
                                            <td>{hostels.rooms_available}</td>
                                            <td>{hostels.room_price}</td>
                                            <td>{hostels.location}</td>
                                            <td>
                                                <NavLink to="/">
                                                    <i class="fa fa-trash" style={{ color: "red" }}></i>
                                                </NavLink>
                                                <NavLink to="/">
                                                    <i class="fa fa-edit" style={{ marginLeft: "20px", color: "black" }}></i>
                                                </NavLink>
                                            </td>
                                        </tr>
                                    ))
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}
export default Home;