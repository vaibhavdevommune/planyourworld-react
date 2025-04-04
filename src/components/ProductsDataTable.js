import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ProductsDataTable = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        $("#dataTable").DataTable();
    }, []);

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
                        <th>Thumbnail</th>
                        <th>Product Name</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Date Created</th>
                        <th>Updated By</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 25 }).map((_, index) => (
                        <tr key={index} className="text-nowrap">
                            <td>{index + 1}</td>
                            <td>
                                <img
                                    src={`https://placehold.co/400`}
                                    alt="Item"
                                    className="coveragelogo-media cursor-pointer"
                                    onClick={() => setSelectedImage(`https://placehold.co/400`)}
                                />
                            </td>
                            <td>Product {index + 1}</td>
                            <td>{index % 2 !== 0 ? "Live" : "Recorded"}</td>
                            <td>
                                <p className="btn btn-outline btn-outline-dashed p-1 px-2 fw-normal btn-outline-info btn-active-light-info">
                                    {index % 3 === 0 ? "Holi Offer" : index % 2 === 0 ? "Sport" : "Share Market"}
                                </p>
                            </td>
                            <td>₹ 999{index + 1}</td>
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
                            <td>2025-03-{(index % 30) + 1}</td>
                            <td>
                                <p className={`badge ${index % 3 === 0 ? "badge-light-info" : index % 2 === 0 ? "badge-light-warning" : "badge-light-danger"}`}>
                                    {index % 3 === 0 ? "Admin" : index % 2 === 0 ? "Manager" : "Sahil"}
                                </p>
                            </td>
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
                    ))}
                </tbody>
            </table>

            {selectedImage && (
                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-body p-0">
                                <img src={selectedImage} alt="Popup" className="productimg" />
                            </div>
                            <button type="button" className="btn-close position-absolute top-0 end-0 m-2" onClick={() => setSelectedImage(null)}></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductsDataTable;