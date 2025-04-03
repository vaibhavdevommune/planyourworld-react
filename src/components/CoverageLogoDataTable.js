import React, { useEffect } from "react";
import { toast } from "react-toastify";
import $ from "jquery";
import "datatables.net-bs5";
import Swal from "sweetalert2";

const CoverageLogoDataTable = () => {
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
                        <th>Image Type</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 25 }).map((_, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{index % 2 === 0 ? "Coverage" : "Logo"}</td>
                            <td>
                                <img src={`https://placehold.co/400`} alt="Item" className="coveragelogo-media" />
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

export default CoverageLogoDataTable;