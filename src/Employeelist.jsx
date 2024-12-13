import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Employeelist = () => {
  const [employees, setEmployees] = useState([]); // State to hold API data
  const [addemployee, setaddemployee] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State to track selected employee for update
  const [updateForm, setUpdateForm] = useState({ name: "", department: "", position: "", email: "" }); // Form state

  // Fetch data from API
  useEffect(() => {
    fetch("http://localhost:5000/admin/employeefind") // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures this runs once on component mount

  
  const handleDelete = (id) => {
    fetch("http://localhost:5000/admin/employeedelete/:id", {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete employee");
        }
        setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
      })
      .catch((error) => console.error("Error deleting employee:", error));
  };

  const handleUpdateClick = (employee) => {
    setSelectedEmployee(employee);
    setUpdateForm({ ...employee });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleUpdateSubmit = () => {
    fetch("http://localhost:5000/admin/employeeupdate/:id", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateForm),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update employee");
        }
        return response.json();
      })
      .then((updatedEmployee) => {
        setEmployees((prevEmployees) =>
          prevEmployees.map((employee) =>
            employee.id === updatedEmployee.id ? updatedEmployee : employee
          )
        );
        setSelectedEmployee(null); // Close the modal
      })
      .catch((error) => console.error("Error updating employee:", error));
  };

  return (
    <>
    <Navbar />
    <Sidebar />
      <div className="container">
        <button className="btn btn-success btn-emp mt-3">Add New Employee</button>
        <h2 className="emp-list">Employee List</h2>
        <table className="table table-bordered table-hover emp-table mt-4">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Position</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td>{employee.position}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleUpdateClick(employee)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {selectedEmployee && (
          <div className="modal show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Update Employee</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSelectedEmployee(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={updateForm.name}
                      onChange={handleUpdateChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Department</label>
                    <input
                      type="text"
                      className="form-control"
                      name="department"
                      value={updateForm.department}
                      onChange={handleUpdateChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Position</label>
                    <input
                      type="text"
                      className="form-control"
                      name="position"
                      value={updateForm.position}
                      onChange={handleUpdateChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={updateForm.email}
                      onChange={handleUpdateChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setSelectedEmployee(null)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleUpdateSubmit}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );

};
export default Employeelist;