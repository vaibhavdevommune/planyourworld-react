import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Modal from "../components/modal";
import { Form, Row, Col } from "react-bootstrap";

const Testimonials = () => {
    const title = "Testimonials";
    const [showModal, setShowModal] = useState(false);
    const [isExpanded, setIsExpanded] = useState(Array(5).fill(false));

    const fullText = "This is an amazing product! Highly recommended for anyone looking for quality and reliability.";
    const charLimit = 50;

    const toggleExpand = (index) => {
        setIsExpanded((prev) => {
            const newExpanded = [...prev];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };

    const handleSave = async (formData) => {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await fetch("YOUR_API_ENDPOINT/testimonials", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Testimonial Created",
                    text: "Your testimonial has been successfully created!",
                });
                setShowModal(false);
            } else {
                throw new Error("Failed to create testimonial");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "There was an error creating the testimonial.",
            });
        }
    };

    const renderTestimonialForm = ({ formData, handleChange }) => (
        <Row>
            <Col sm={6}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name || ""}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
            </Col>

            <Col sm={6}>
                <Form.Group className="mb-3">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                        type="file"
                        name="profilePicture"
                        accept="image/*"
                        onChange={handleChange}
                        required={!formData.profilePicture}
                    />
                </Form.Group>
            </Col>

            <Col sm={6}>
                <Form.Group className="mb-3">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                        type="text"
                        name="designation"
                        value={formData.designation || ""}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
            </Col>

            <Col sm={6}>
                <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                        name="status"
                        value={formData.status || ""}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </Form.Select>
                </Form.Group>
            </Col>

            <Col sm={12}>
                <Form.Group className="mb-3">
                    <Form.Label>Testimonial Text</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="text"
                        value={formData.text || ""}
                        onChange={handleChange}
                        rows={3}
                        required
                    />
                </Form.Group>
            </Col>
        </Row>
    );

    return (
        <>
            <section className="testimonials">
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
                                <button onClick={() => setShowModal(true)} className="btn btn-light-success text-nowrap d-flex align-items-center gap-2">
                                    <span className="material-symbols-outlined fs-4">add</span>
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-10">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <div className="card p-5 shadow-sm rounded-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-3">
                                        <img
                                            src={`https://i.pravatar.cc/80?img=${index + 1}`}
                                            alt="Profile"
                                            className="rounded-circle"
                                            width="50"
                                            height="50"
                                        />
                                        <div>
                                            <h6 className="mb-0">John Doe {index + 1}</h6>
                                            <small className="text-muted">Software Engineer</small>
                                        </div>
                                    </div>

                                    <div className="dropdown">
                                        <button
                                            className="btn btn-light p-1 border-0"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <button className="dropdown-item">
                                                    <span className="material-symbols-outlined me-2">edit</span>
                                                    Edit
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item text-danger">
                                                    <span className="material-symbols-outlined me-2">delete</span>
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <p className="text-muted js-excerpt mt-4 excerpt-hidden">
                                    {isExpanded[index] ? fullText : fullText.slice(0, charLimit) + "..."}
                                </p>
                                <Link onClick={() => toggleExpand(index)} className="js-show-more w-fc">
                                    {isExpanded[index] ? "Show Less" : "Show More"}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Modal showModal={showModal} handleClose={() => setShowModal(false)} handleSave={handleSave} title="Create New Testimonial">
                {renderTestimonialForm}
            </Modal>
        </>
    );
};

export default Testimonials;