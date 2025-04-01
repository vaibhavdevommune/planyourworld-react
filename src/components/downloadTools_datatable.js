import React, { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";


const DownloadToolsDatatable = ({ setIsChecked }) => {
    const [selectAll, setSelectAll] = useState(false);

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

    const handleSelectAllChange = (e) => {
        const checked = e.target.checked;
        setSelectAll(checked);
        const checkboxes = document.querySelectorAll(".select-checkbox");
        checkboxes.forEach((checkbox) => {
            checkbox.checked = checked;
        });
        setIsChecked(checked);
    };

    const handleCheckboxChange = (e) => {
        const checkboxes = document.querySelectorAll(".select-checkbox");
        const totalCheckboxes = checkboxes.length;
        const checkedCheckboxes = [...checkboxes].filter((checkbox) => checkbox.checked).length;

        setSelectAll(checkedCheckboxes === totalCheckboxes);
        setIsChecked(checkedCheckboxes > 0);
    };

    return (
        <div className="table-responsive">
            <table id="dataTable" className="table table-striped">
                <thead>
                    <tr>
                        <th>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={handleSelectAllChange}
                                    id="downloadTools_select_all"
                                    checked={selectAll}
                                />
                            </div>
                        </th>
                        <th>S.No</th>
                        <th>Tools Name</th>
                        <th>Slug</th>
                        <th>File</th>
                        <th>Status</th>
                        <th>Course Name</th>
                        <th>Created By</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 25 }).map((_, index) => {
                        const fileName = `file-${index + 1}.pdf`;

                        return (
                            <tr key={index}>
                                <td>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input select-checkbox"
                                            type="checkbox"
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                </td>
                                <td>{index + 1}</td>
                                <td>{index % 2 === 0 ? "Tool A" : "Tool B"}</td>
                                <td>{`slug-${index + 1}`}</td>
                                <td>
                                    <a href={fileName} target="_blank" rel="noopener noreferrer">
                                        {fileName}
                                    </a>
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
                                <td>{index % 2 === 0 ? "React Course" : "Vue Course"}</td>
                                <td>{`User ${index + 1}`}</td>
                                <td className="d-flex align-items-center gap-3">
                                    <button className="btn btn-light-info btn-sm box-flex box-32">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </button>
                                    <button className="btn btn-light-primary btn-sm box-flex box-32">
                                        <span className="material-symbols-outlined">edit</span>
                                    </button>
                                    <button className="btn btn-light-danger btn-sm box-flex box-32" onClick={handleDelete}>
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DownloadToolsDatatable;
