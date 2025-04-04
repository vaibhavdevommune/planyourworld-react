import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import DatePicker from "../components/flatpickr";
import ProductsDataTable from "../components/ProductsDataTable";


const Products = () => {
    const [title] = useState("Products");

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
                                <Link to='/create_coupons' className="btn btn-light-success text-nowrap d-flex align-items-center justify-content-end w-fc gap-2">
                                    <span class="material-symbols-outlined fs-4">
                                        add
                                    </span>
                                    Create
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <ProductsDataTable />
                </div>
            </section >
        </>
    );
};

export default Products;
