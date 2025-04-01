import React, { useEffect } from "react";
import $ from "jquery";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-bs5";

const DataTableComponent = () => {
  useEffect(() => {
    $("#dataTable").DataTable();
  }, []);

  return (
    <div className="table-responsive">
      <table id="dataTable" className="table table-striped">
        <thead>
          <tr>
            <th>S.No</th>
            <th>ACT</th>
            <th>WRK</th>
            <th>Customer Contact</th>
            <th>Booking ID</th>
            <th>Course NAME</th>
            <th>Purchase Date</th>
            <th>PAYMENT</th>
            <th>BKG</th>
            <th>ETK</th>
            <th>CNL</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 25 }).map((_, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{index % 2 === 0 ? "Yes" : "No"}</td>
              <td>{index % 2 !== 0 ? "Yes" : "No"}</td>
              <td>John Doe {index + 1}</td>
              <td>#{12345 + index}</td>
              <td>{index % 2 === 0 ? "React Course" : "Vue Course"}</td>
              <td>2025-03-{(index % 30) + 1}</td>
              <td>{index % 2 === 0 ? "Paid" : "Pending"}</td>
              <td>{index % 3 === 0 ? "Confirmed" : "Pending"}</td>
              <td>{index % 4 === 0 ? "Issued" : "Processing"}</td>
              <td>{index % 5 === 0 ? "None" : "Cancelled"}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default DataTableComponent;
