import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const HeroSection = () => {
    const [title] = useState("Meta Settings");
    const [commonsection] = useState("Home Page Sections");

    const handleReset = () => {
        toast.info(`${title} Reset has been reset`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const handleSubmit = () => {
        toast.success(`${title} Created successfully!`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const [mediaLogo, setMediaLogo] = useState(true);
    const [mediaCoverage, setMediaCoverage] = useState(false);
    const [testimonials, setTestimonials] = useState(false);
    const [trackRecord, setTrackRecord] = useState(false);

    const handleMediaLogoToggle = () => {
        setMediaLogo(!mediaLogo);
        toast.success(`Media Logo is ${!mediaLogo ? 'activated' : 'deactivated'} successfully!`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    };

    const handleMediaCoverageToggle = () => {
        setMediaCoverage(!mediaCoverage);
        toast.success(`Media Coverage is ${!mediaCoverage ? 'activated' : 'deactivated'} successfully!`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    };

    const handleTestimonialsToggle = () => {
        setTestimonials(!testimonials);
        toast.success(`Testimonials is ${!testimonials ? 'activated' : 'deactivated'} successfully!`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    };

    const handleTrackRecordToggle = () => {
        setTrackRecord(!trackRecord);
        toast.success(`Track Record is ${!trackRecord ? 'activated' : 'deactivated'} successfully!`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    };

    return (
        <section className="aboutsale">
            <Container>
                <div className="page-card">
                    <h3 className="fw-semibold">{title}</h3>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label htmlFor="">E-Book Name</label>
                        </Col>
                        <Col sm={9}>
                            <input type="text" className="form-control form-control-solid" placeholder="Enter E-Book Name" />
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label htmlFor="">Slug</label>
                        </Col>
                        <Col sm={9}>
                            <input type="url" className="form-control form-control-solid" placeholder="Enter Slug" />
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label htmlFor="">Meta Title (0/60)</label>
                        </Col>
                        <Col sm={9}>
                            <input type="text" className="form-control form-control-solid" placeholder="Enter Meta Title" />
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label htmlFor="">Meta Description (0/160)</label>
                        </Col>
                        <Col sm={9}>
                            <input type="text" className="form-control form-control-solid" placeholder="Enter Meta Description" />
                        </Col>
                    </Row>

                    <h3 className="fw-semibold border-top pt-8">{commonsection}</h3>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label className="text-color">Media Logo</label>
                        </Col>
                        <Col sm={9}>
                            <Form.Check
                                type="switch"
                                id="media-logo-switch"
                                checked={mediaLogo}
                                onChange={handleMediaLogoToggle}
                            />
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label className="text-color">Media Coverage</label>
                        </Col>
                        <Col sm={9}>
                            <Form.Check
                                type="switch"
                                id="media-coverage-switch"
                                checked={mediaCoverage}
                                onChange={handleMediaCoverageToggle}
                            />
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label className="text-color">Testimonials</label>
                        </Col>
                        <Col sm={9}>
                            <Form.Check
                                type="switch"
                                id="testimonials-switch"
                                checked={testimonials}
                                onChange={handleTestimonialsToggle}
                            />
                        </Col>
                    </Row>

                    <Row className="align-items-center mb-2">
                        <Col sm={3}>
                            <label className="text-color">Track Record</label>
                        </Col>
                        <Col sm={9}>
                            <Form.Check
                                type="switch"
                                id="track-record-switch"
                                checked={trackRecord}
                                onChange={handleTrackRecordToggle}
                            />
                        </Col>
                    </Row>

                    <div className="d-flex justify-content-end gap-4 border-top pt-8">
                        <Button
                            className="btn-light-secondary"

                            variant="secondary"
                            onClick={() => handleReset(false)}
                        >
                            Reset {title}
                        </Button>
                        <Button
                            className="btn-light-primary"
                            variant="primary"
                            onClick={handleSubmit}
                        >
                            Create {title}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;