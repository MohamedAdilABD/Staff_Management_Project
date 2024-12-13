import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [leave, setLeave] = useState([]);
  const [pending, setPending] = useState([]);

  // Fetch employee data when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/admin/employeefind') // Replace with your API endpoint
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
        setError('Failed to fetch employee data');
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/admin/showleave') // Replace with your API endpoint
      .then((response) => {
        setLeave(response.data);
      })
      .catch((error) => {
        console.error('Error fetching leave data:', error);
        setError('Failed to fetch leave data');
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/admin/updateleave/:id') // Replace with your API endpoint
      .then((response) => {
        setPending(response.data);
      })
      .catch((error) => {
        console.error('Error fetching pending leave data:', error);
        setError('Failed to fetch pending leave data');
      });
  }, []);

  return (
    <>
    <Navbar />
    <Sidebar />
    <div className="container mt-4" style={{ minHeight: '80vh' }}>
      <div className="row g-4 justify-content-center">
        {/* Employee Details */}
        {employees.map((employee, index) => (
          <div className="col-md-4" key={index}>
            <div className="card" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <h5 className="m-2 text-primary">Employee Details</h5>
              <div className="card-body">
                <h5 className="card-title text-primary-emphasis">{employee.name}</h5>
                <p className="card-text">
                  <strong>Department:</strong> {employee.department}<br />
                  <strong>Position:</strong> {employee.position}<br />
                  <strong>Email:</strong> {employee.email}
                </p>
                <a href="#" className="btn btn-primary">View Profile</a>
              </div>
            </div>
          </div>
        ))}

        {/* Employee Leave Data */}
        <div className="col-md-4">
          {leave.map((leaveItem, index) => (
            <div className="card" key={index} style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <h5 className="m-2 text-primary">Employee Leave</h5>
              <div className="card-body">
                <p className="card-text">
                  <strong>Leave Applier:</strong> {leaveItem.name}<br />
                  <strong>Applier Department:</strong> {leaveItem.department}<br />
                  <strong>Leave Reason:</strong> {leaveItem.reason}<br />
                  <strong>StartDate :</strong> {leaveItem.startDate}<br />
                  <strong>EndDate:</strong> {leaveItem.endDate}
                </p>
                <a href="#" className="btn btn-info">View All Leave Requests</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row g-4 justify-content-center mt-4">
        {/* Pending Leave Requests */}
        <div className="col-md-4">
          {pending.map((pendingItem, index) => (
            <div className="card" key={index} style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <h5 className="card-header">Leave Request</h5>
              <div className="card-body">
                <p className="card-text">
                  <strong>Employee:</strong> {pendingItem.name}<br />
                  <strong>Leave Type:</strong> {pendingItem.leave_type}<br />
                  <strong>Duration:</strong> {pendingItem.duration}<br />
                  <strong>Reason:</strong> {pendingItem.reason}
                </p>
                <a href="#" className="btn btn-success">Approve</a>
                <a href="#" className="btn btn-danger">Reject</a>
              </div>
            </div>
          ))}
        </div>

        {/* Tasks */}
        <div className="col-md-5">
          <div className="card" style={{ maxHeight: '300px', overflowY: 'auto' }}>
            <h5 className="card-header">Tasks</h5>
            <div className="card-body">
              <h5 className="card-title">Pending Tasks</h5>
              <ul>
                <li>Complete Project Documentation</li>
                <li>Fix bugs in the authentication system</li>
                <li>Review pull requests</li>
                <li>Prepare for team meeting</li>
                <li>Update internal documentation</li>
              </ul>
              <a href="#" className="btn btn-info">View All Tasks</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;