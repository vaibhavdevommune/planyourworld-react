import React, { useEffect } from "react";
import { toast } from "react-toastify";
import $ from "jquery";
import "datatables.net-bs5";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

const CouponsDataTable = () => {
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

    return (
        <div className="table-responsive">
            <table id="dataTable" className="table table-striped">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>Coupons Code</th>
                        <th>Offer Amount</th>
                        <th>Applied On</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Use Limit</th>
                        <th>Auto Apply</th>
                        <th>Status</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 25 }).map((_, index) => (
                        <tr key={index} className="text-nowrap">
                            <td>{index + 1}</td>
                            <td>Offer {index + 1}</td>
                            <td>{12345 + index}</td>
                            <td>{500 + 1}</td>
                            <td>
                                <p className="btn btn-outline btn-outline-dashed p-1 px-2 fw-normal btn-outline-primary btn-active-light-primary">
                                    {index % 3 === 0 ? "Holi Offer" : (index % 2 === 0 ? "Diwali Offer" : "New Year Offer")}
                                </p>
                            </td>
                            <td>2025-03-{(index % 30) + 1}</td>
                            <td>2025-03-{(index % 30) + 1}</td>
                            <td>{20 + index}</td>
                            <td>{index % 2 === 0 ? "Yup" : "Nope"}</td>
                            <td>
                                <p className={`badge ${index % 3 === 0 ? "badge-light-success" : (index % 2 === 0 ? "badge-light-warning" : "badge-light-danger")}`}>
                                    {index % 3 === 0 ? "Confirmed" : (index % 2 === 0 ? "Pending" : "Cancelled")}
                                </p>

                            </td>
                            <td>2025-03-{(index % 30) + 1}</td>
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

export default CouponsDataTable;