import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Leaverequest() {
    const [leaveRequests, setLeaveRequests] = useState([]); // State to store API data

    // Fetch data from API
    useEffect(() => {
        fetch("http://localhost:5000/admin/showleave") // Replace with your API endpoint
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setLeaveRequests(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []); // Empty dependency array ensures this runs once on component mount

    return (
        <>
        <Navbar />
        <Sidebar />
        <table className="table w-75 mt-3 border">
            <thead>
                <tr>
                    <th scope="col">SNO</th>
                    <th scope="col">Name</th>
                    <th scope="col">Department</th>
                    <th scope="col">Leave Reason</th>
                    <th scope="col">Days</th>
                    <th scope="col">Action</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {leaveRequests.length > 0 ? (
                    leaveRequests.map((request, index) => (
                        <tr key={request.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{request.name}</td>
                            <td>{request.department}</td>
                            <td>{request.reason}</td>
                            <td>{request.days}</td>
                            <td>
                                <button className="btn btn-success">Accept</button>
                                <button className="btn btn-danger">Reject</button>
                            </td>
                            <td>{request.status}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="7" className="text-center">
                            Loading...
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    );
}

export default Leaverequest;