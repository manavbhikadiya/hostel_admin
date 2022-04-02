import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            <i className="fa fa-grid"></i>
                            <span>Hostel List</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/addHostel">
                            <i className="bi bi-grid"></i>
                            <span>Add Hostel</span>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </>
    )
}
export default Sidebar;