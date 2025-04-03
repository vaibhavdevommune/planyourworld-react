import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import DatePicker from "../components/flatpickr";
import LeadDatable from "../components/LeadDataTable";


const Lead = () => {
    const [title] = useState("Leads");

    const handleAddLead = () => {
        alert("Export btn Clicked!");
    };

    return (
        <>
            <section className="leads">
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
                                <div className="col-4">
                                    <div className="has-icon">
                                        <span className="material-symbols-outlined on-left">
                                            search
                                        </span>
                                        <input type="text" placeholder="Enter Course Name" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-4">
                                    <DatePicker />
                                </div>

                                <div className="col-1">
                                    <Button text="Export" onClick={handleAddLead} className="btn btn-light-success" hidden>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-xl-flex align-items--xl-center justify-content-xl-between mt-10">
                    <div class="btn-group my-xl-0 my-2" role="group" aria-label="Basic example ">
                        <button type="button" class="btn btn-light-primary">ALL PENDING</button>
                        <button type="button" class="btn btn-light-primary">HOLD</button>
                    </div>
                    <div class="btn-group my-xl-0 my-2" role="group" aria-label="Basic example ">
                        <button type="button" class="btn btn-light-primary">AUTH</button>
                        <button type="button" class="btn btn-light-primary">REF</button>
                    </div>
                    <div class="btn-group my-xl-0 my-2" role="group" aria-label="Basic example ">
                        <button type="button" class="btn btn-light-primary">ALL LEADS</button>
                        <button type="button" class="btn btn-light-primary">BKG</button>
                        <button type="button" class="btn btn-light-primary">ABD</button>
                    </div>
                    <div class="btn-group my-xl-0 my-2" role="group" aria-label="Basic example ">
                        <button type="button" class="btn btn-light-warning">CNG REV</button>
                    </div>
                    <div class="btn-group my-xl-0 my-2" role="group" aria-label="Basic example ">
                        <button type="button" class="btn btn-light-primary">CHRG</button>
                        <button type="button" class="btn btn-light-primary">CBC</button>
                        <button type="button" class="btn btn-light-primary">CBV</button>
                    </div>
                </div>

                <div className="mt-5">
                    <LeadDatable />
                </div>
            </section >
        </>
    );
};

export default Lead;
