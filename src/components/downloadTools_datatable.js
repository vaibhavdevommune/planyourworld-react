import React, { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs5";

const DownloadToolsDatatable = ({ setIsChecked }) => {
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        $("#dataTable").DataTable();
    }, []);

    // Handle "Select All" checkbox change
    const handleSelectAllChange = (e) => {
        const checked = e.target.checked;
        setSelectAll(checked); // Update state for Select All checkbox
        const checkboxes = document.querySelectorAll(".select-checkbox");
        checkboxes.forEach((checkbox) => {
            checkbox.checked = checked; // Check all individual checkboxes
        });
        setIsChecked(checked); // Update parent state
    };

    // Handle individual checkbox change
    const handleCheckboxChange = (e) => {
        const checkboxes = document.querySelectorAll(".select-checkbox");
        const totalCheckboxes = checkboxes.length;
        const checkedCheckboxes = [...checkboxes].filter((checkbox) => checkbox.checked).length;
        
        setSelectAll(checkedCheckboxes === totalCheckboxes); // Update Select All checkbox
        setIsChecked(checkedCheckboxes > 0); // Update visibility of Delete All button
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
                                    <button className="btn btn-light-danger btn-sm box-flex box-32">
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
