import React, { useState } from "react";
import { Link } from "react-router-dom";
import CoverageLogoDataTable from "../components/CoverageLogoDataTable";
import Swal from "sweetalert2";
import Modal from "../components/modal";
import { Form, Row, Col } from "react-bootstrap";

const CoverageAndLogo = () => {
    const [title] = useState("Coverage And Logo");
    const [showModal, setShowModal] = useState(false);

    const handleSave = async (formData) => {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await fetch("YOUR_API_ENDPOINT/coverageLogo", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Coverage Logo Created",
                    text: "Your Coverage Logo has been successfully created!",
                });
                setShowModal(false);
            } else {
                throw new Error("Failed to create Coverage Logo");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "There was an error creating the Coverage Logo.",
            });
        }
    };

    const renderTestimonialForm = ({ formData, handleChange, imagePreview }) => (
        <Row>
            <Col sm={6}>
                <Form.Group className="mb-3">
                    <Form.Label>Select media option</Form.Label>
                    <Form.Select aria-label="Default select example" value={formData.name || ""}
                        onChange={handleChange}
                        required>
                        <option selected>Select media option</option>
                        <option value="Coverage">Coverage</option>
                        <option value="Logo">Logo</option>
                    </Form.Select>
                </Form.Group>
            </Col>

            <Col sm={6}>
                <Form.Group className="mb-3">
                    <Form.Label>Media Picture</Form.Label>
                    <Form.Control
                        type="file"
                        name="mediaPicture"
                        accept="image/*"
                        onChange={handleChange}
                        required={!formData.mediaPicture}
                    />
                </Form.Group>
            </Col>

            <Col sm={12}>
                <div id="preview-media">
                {imagePreview ? (
            <img
              src={imagePreview}
              alt="Media Preview" className="img_preview"
            />
          ) : (
            <p>No image selected</p>
          )}
                </div>
            </Col>
        </Row>
    );

    return (
        <>
            <section className="coverage_and_logo">
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
                                <div className="col-1">
                                    <button onClick={() => setShowModal(true)} className="btn btn-light-success text-nowrap d-flex align-items-center gap-2">
                                        <span className="material-symbols-outlined fs-4">add</span>
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <CoverageLogoDataTable />
                </div>
            </section >

            <Modal showModal={showModal} handleClose={() => setShowModal(false)} handleSave={handleSave} title="Create New Testimonial">
                {renderTestimonialForm}
            </Modal>
        </>
    );
};

export default CoverageAndLogo;
