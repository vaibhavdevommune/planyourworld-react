import React, { useEffect } from "react";
import $ from "jquery";
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
                                {/* <img src={`https://via.placeholder.com/50?text=${index + 1}`} alt="Item" className="img-fluid rounded" /> */}
                                <img src={`https://placehold.co/400`} alt="Item" className="img-fluid rounded" />
                            </td>
                            <td>Course {index + 1}</td>
                            <td>{index % 2 === 0 ? "John Doe" : "Jane Doe"}</td>
                            <td>{index % 2 === 0 ? "Programming" : "Design"}</td>
                            <td>2025-03-{(index % 30) + 1}</td>
                            <td>{index % 2 === 0 ? "Yes" : "No"}</td>
                            <td>{index % 3 === 0 ? "Yes" : "No"}</td>
                            <td className="d-flex align-items-center gap-3">
                                    <button className="btn btn-light-primary btn-sm box-flex box-32">
                                        <span class="material-symbols-outlined">
                                        edit
                                        </span>
                                    </button>
                                <button className="btn btn-light-danger btn-sm box-flex box-32">
                                    <span class="material-symbols-outlined">
                                         delete
                                    </span>
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
