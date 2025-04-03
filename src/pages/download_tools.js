import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import DateRange from "../components/date_range";
import { toast } from "react-toastify";
import DownloadToolModal from "../components/DownloadToolModal";
import DownloadToolsDatatable from "../components/downloadTools_datatable";
import "datatables.net-bs5";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

const DownloadTools = () => {
  const [title] = useState("Download Tools");
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null); 

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleAddLead = () => {
    setModalData({
      title: "Add New Download Tool",
      description: "",
    });
    handleModalShow(); 
  };

  const handleSaveTool = (newToolData) => {
    console.log("New Tool Data:", newToolData);
    toast.success("Download tool added successfully!");
    handleModalClose(); 
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
        toast.success("Articles deleted successfully.");
        Swal.fire("Deleted!", "Article has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <section className="download_tools">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            <div className="col-12 col-sm-5 col-md-5 col-lg-4">
              <div className="title">
                <h2>{title}</h2>
              </div>
              <ol className="breadcrumb breadcrumb-line text-muted fs-6 fw-semibold">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">{title}</Link>
                </li>
                <li className="breadcrumb-item text-color-secondary">List</li>
              </ol>
            </div>

            <div className="col-12 col-sm-7 col-md-7 col-lg-8 text-end">
              <div className="d-flex align-items-center gap-3 justify-content-end">
                <div className="w-170px">
                  <div className="has-icon">
                    <span className="material-symbols-outlined on-left">search</span>
                    <input
                      type="text"
                      placeholder="Enter Tools Name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="w-170px me-2">
                  <DateRange />
                </div>

                <div className="">
                  <div className="d-flex gap-3 justify-content-end">
                    <Button
                      text="Create"
                      onClick={handleAddLead} 
                      className="btn btn-light-success text-nowrap d-flex align-items-center gap-2"
                    >
                      <span className="material-symbols-outlined fs-4">add</span>
                    </Button>

                    <Button
                      text="Delete All"
                      onClick={handleDelete}
                      className={`btn btn-light-danger text-nowrap d-flex align-items-center gap-2 ${
                        isChecked ? "" : "d-none"
                      }`}
                    >
                      <span className="material-symbols-outlined fs-4">delete</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <DownloadToolsDatatable setIsChecked={setIsChecked} />
        </div>
      </section>

      <DownloadToolModal
        showModal={showModal}
        handleClose={handleModalClose}
        handleSave={handleSaveTool} 
        modalData={modalData} 
      />
    </>
  );
};

export default DownloadTools;
