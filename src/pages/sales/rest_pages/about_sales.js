import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const AboutSales = () => {
    const [title] = useState("About Sales");
    const [commonsection] = useState("Common Section");

    const handleReset = () => {
        toast.info("About Sales Created has been reset", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const handleSubmit = () => {
        toast.success("About Sales Created successfully!", {
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
                            <label htmlFor="">Sales Type</label>
                        </Col>
                        <Col sm={9}>
                            <Form.Select aria-label="Default select example" className="form-control form-control-solid">
                                <option selected>Open this select Sales Type</option>
                                <option value="1">Live Session</option>
                                <option value="2">Recorded</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label htmlFor="">Sales Category</label>
                        </Col>
                        <Col sm={9}>
                            <Form.Select aria-label="Default select example" className="form-control form-control-solid">
                                <option selected>Open this select Sales Category</option>
                                <option value="1">CFP Training</option>
                                <option value="2">MONEY IQ CLASS</option>
                                <option value="3">Training For Financial Advisor</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label className="text-color">Course Name</label>
                        </Col>
                        <Col sm={9}>
                            <input type="text" className="form-control form-control-solid" placeholder="Enter Course Name" />
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label className="text-color">Slug</label>
                        </Col>
                        <Col sm={9}>
                            <input type="url" className="form-control form-control-solid" placeholder="Enter Slug" />
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label className="text-color">Thumbnail Image</label>
                        </Col>
                        <Col sm={9}>
                            <input type="file" className="form-control form-control-solid" placeholder="Choose Thumbnail Image" />
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label className="text-color">Alt Tag</label>
                        </Col>
                        <Col sm={9}>
                            <input type="text" className="form-control form-control-solid" placeholder="Choose Alt Tag" />
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label className="text-color">Meta Title</label>
                        </Col>
                        <Col sm={9}>
                            <input type="text" className="form-control form-control-solid" placeholder="Choose Meta Title" />
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label className="text-color">Meta Description</label>
                        </Col>
                        <Col sm={9}>
                            <input type="text" className="form-control form-control-solid" placeholder="Choose Meta Description" />
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label className="text-color">With Header & Footer</label>
                        </Col>
                        <Col sm={9}>
                            <Form>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Yes"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                    </div>
                                ))}
                            </Form>
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
                            Reset About Sales
                        </Button>
                        <Button
                            className="btn-light-primary"
                            variant="primary"
                            onClick={handleSubmit}
                        >
                            Create About Sales
                        </Button>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default AboutSales;