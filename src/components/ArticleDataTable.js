import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import $ from "jquery";
import "datatables.net-bs5";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

const DataTableComponent = () => {
  useEffect(() => {
    $("#dataTable").DataTable();
  }, []);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("Article deleted successfully.");
        Swal.fire("Deleted!", "Article has been deleted.", "success");
      }
    });
  };

  const handleSwitchChange = () => {
    toast.success("The status has been updated successfully.", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="table-responsive">
      <ToastContainer position="top-right" autoClose={1000} />

      <table id="dataTable" className="table table-striped">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="select-all" />
              </div>
            </th>
            <th>S.No</th>
            <th>Image</th>
            <th>Title</th>
            <th>Created By</th>
            <th>Category</th>
            <th>Created Date</th>
            <th>Featured</th>
            <th>Recommended</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 25 }).map((_, index) => (
            <tr key={index}>
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>{index + 1}</td>
              <td>
                <img src={`https://placehold.co/400`} alt="Item" className="img-fluid rounded" />
              </td>
              <td>Course {index + 1}</td>
              <td>{index % 2 === 0 ? "John Doe" : "Jane Doe"}</td>
              <td>{index % 2 === 0 ? "Programming" : "Design"}</td>
              <td>
                {new Date(2025, 2, 18).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                }).replace(" ", ", ")}
              </td>

              <td>
                <div className="form-check form-switch form-check-custom form-check-solid">
                  <input
                    className="form-check-input h-20px w-40px"
                    type="checkbox"
                    id={`switch-${index}-1`}
                    defaultChecked={index % 2 === 0}
                    onChange={handleSwitchChange}
                  />
                </div>
              </td>

              <td>
                <div className="form-check form-switch form-check-custom form-check-solid">
                  <input
                    className="form-check-input h-20px w-40px"
                    type="checkbox"
                    id={`switch-${index}-2`}
                    defaultChecked={index % 3 === 0}
                    onChange={handleSwitchChange}
                  />
                </div>
              </td>

              <td className="d-flex align-items-center gap-3">
                <button className="btn btn-light-primary btn-sm box-flex box-32">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="btn btn-light-danger btn-sm box-flex box-32" onClick={handleDelete}>
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableComponent;
