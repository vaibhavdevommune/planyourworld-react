import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Card, Button } from "react-bootstrap";

const TrackRecord = () => {
    const [title] = useState("Track Record");

    const handleAddLead = () => {
        alert("Export btn Clicked!");
    };

    return (
        <>
            <section className="track_record">
                <Row>
                    <div className="col-md-12 d-flex justify-content-between align-items-center">
                        <Col md={12} className="d-flex justify-content-between align-items-center">
                            <Col sm={12} lg={12}>
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
                        </Col>
                    </div>
                </Row>

                <Row className="mt-10 align-items-center">
                    <Col md={3}>
                        <label htmlFor="" className="text-color">
                            Title
                        </label>
                    </Col>
                    <Col md={9}>
                        <Row className="align-items-center">
                            <Col md={11}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your Title"
                                />
                            </Col>
                            <Col md={1}>
                                <Form.Check className="form-check-success"
                                    type="switch"
                                    id={`custom-switch`}
                                    label=""
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <div className="trackrecord-container mt-10">
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                Content 1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="align-items-center mb-3">
                                <Col sm={12} md={3}>
                                    <label htmlFor="" className="text-color">
                                        Text
                                    </label>
                                </Col>
                                <Col sm={12} md={9}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your Menu Items"
                                    />
                                </Col>
                            </Row>

                            <Row className="align-items-center mb-3">
                                <Col sm={12} md={3}>
                                    <label htmlFor="" className="text-color">
                                        Description
                                    </label>
                                </Col>
                                <Col sm={12} md={9}>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Card.Title>
                                Content 2
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="align-items-center mb-3">
                                <Col sm={12} md={3}>
                                    <label htmlFor="" className="text-color">
                                        Text
                                    </label>
                                </Col>
                                <Col sm={12} md={9}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your Menu Items"
                                    />
                                </Col>
                            </Row>

                            <Row className="align-items-center mb-3">
                                <Col sm={12} md={3}>
                                    <label htmlFor="" className="text-color">
                                        Description
                                    </label>
                                </Col>
                                <Col sm={12} md={9}>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Card.Title>
                                Content 3
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="align-items-center mb-3">
                                <Col sm={12} md={3}>
                                    <label htmlFor="" className="text-color">
                                        Text
                                    </label>
                                </Col>
                                <Col sm={12} md={9}>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Your Menu Items"
                                    />
                                </Col>
                            </Row>

                            <Row className="align-items-center mb-3">
                                <Col sm={12} md={3}>
                                    <label htmlFor="" className="text-color">
                                        Description
                                    </label>
                                </Col>
                                <Col sm={12} md={9}>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </section >
        </>
    );
};

export default TrackRecord;
