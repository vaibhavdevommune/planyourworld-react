import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Button from "../components/button";
import DatePicker from "../components/flatpickr";
import LeadDatable from "../components/article_datatable";

const Articles = () => {
    const [title, setTitle] = useState("Articles");

    const handleAddLead = () => {
        alert("Export btn Clicked!");
    };

    return (
        <>
            <section className="articles">
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
                                <li className="breadcrumb-item text-muted">List</li>
                            </ol>
                        </div>

                        <div className="col-12 col-sm-7 col-md-7 col-lg-8 text-end">
                            <div className="d-flex align-items-center gap-3 justify-content-end">
                                <div className="col-4">
                                    <div className="has-icon">
                                        <span className="material-symbols-outlined on-left">
                                            search
                                        </span>
                                        <input type="text" placeholder="Enter Article Title" className="form-control" />
                                    </div>
                                </div>

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
                                    <Button text="Create" onClick={handleAddLead} className="btn btn-light-success text-nowrap d-flex align-items-center gap-2" hidden>
                                        <span class="material-symbols-outlined fs-4">
                                            add
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <LeadDatable />
                </div>
            </section >
        </>
    )
};

export default Articles