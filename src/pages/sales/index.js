import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col} from "react-bootstrap";
import SalesDataTable from "../../components/SalesDataTable";


const SalesPage = () => {
    const [title] = useState("Sales Page");

    return (
        <section className="sales-page">
            <Container>
                <Row className="justify-content-between">
                    <Col md={12} className="d-flex justify-content-between align-items-center">
                        <Col xs={12} sm={5} md={5} lg={4}>
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
                        </Col>
                        <Col xs={12} sm={7} md={8} lg={8} className="d-flex justify-content-end gap-3">
                            <Link to='/create_sales' className="btn btn-light-secondary text-nowrap d-flex align-items-center justify-content-end w-fc gap-2">
                                <span className="material-symbols-outlined fs-4">
                                    edit_square
                                </span>
                                Draft
                            </Link>

                            <Link to='/create_sales' className="btn btn-light-success text-nowrap d-flex align-items-center justify-content-end w-fc gap-2">
                                <span className="material-symbols-outlined fs-4">
                                    add
                                </span>
                                Create
                            </Link>
                        </Col>
                    </Col>
                </Row>

                <div className="mt-10">
                    <SalesDataTable />
                </div>
            </Container>
        </section>
    );
};

export default SalesPage;