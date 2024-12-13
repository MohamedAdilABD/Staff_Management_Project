import React from "react";
import './App.css';
import { MdSpaceDashboard  } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Sidebar () {
  
    return (
      <div class='sidebar bg-black '>
        <ul className="sidebar-menu text-warning ">
          <li>
            <Link className="flex items-center gap-3" to='/' >
              <MdSpaceDashboard /> <span>Dashboard</span> 
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3" to='/employee' > 
              <CgProfile /> <span>Employees</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3" to='/recruitment' > 
              <ImProfile /> <span>Recruitment</span> 
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3" to='/leave' > 
              <FaCalendarAlt/> <span>Leave</span>
            </Link>
          </li>
        </ul>
      </div>
    );
};
