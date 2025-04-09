import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { toast } from 'react-toastify';

const ArticlesDetails = () => {
    const [adType1, setAdType1] = useState("");
    const [adType2, setAdType2] = useState("");

    const handleReset = () => {
        setAdType1("");
        setAdType2("");
        toast.info("Form has been reset", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const handleSubmit = () => {
        toast.success("Ads applied successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <section className="articlesdetails">
            <Container>
                <div className="page-card">
                <h3 className="fw-semibold">Article Details Page</h3>
                    <Card>
                        <Card.Header>
                            <h4 className="fw-medium">Advertisement 1</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm={3}>
                                    <label className="text-color">
                                        My Adsense/Google AdSense
                                    </label>
                                </Col>
                                <Col sm={9}>
                                    <Form>
                                        <div className="mb-3">
                                            <Form.Check
                                                inline
                                                label="My AdSense"
                                                name="group1"
                                                type="radio"
                                                id="inline-radio-1-1"
                                                checked={adType1 === "myadsense"}
                                                onChange={() => setAdType1("myadsense")}
                                            />
                                            <Form.Check
                                                inline
                                                label="Google AdSense"
                                                name="group1"
                                                type="radio"
                                                id="inline-radio-1-2"
                                                checked={adType1 === "googleadsense"}
                                                onChange={() => setAdType1("googleadsense")}
                                            />
                                        </div>
                                    </Form>
                                </Col>
                            </Row>

                            <div
                                id="for_myadsense"
                                className={`transition-toggle ${adType1 === "myadsense" ? "show" : "hide"
                                    } d-flex flex-column gap-4`}
                            >
                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Upload Image</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="file" className="form-control" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Alt Tag</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control" placeholder="Enter Alt Tag" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Target URL</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="url" className="form-control" placeholder="Enter Target URL" />
                                    </Col>
                                </Row>
                            </div>

                            <div
                                id="for_googleadsense"
                                className={`transition-toggle ${adType1 === "googleadsense" ? "show" : "hide"
                                    } d-flex flex-column gap-4`}
                            >
                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Alt Tag</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control" placeholder="Enter Alt Tag" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Target URL</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="url" className="form-control" placeholder="Enter Target URL" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Ad Name</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control" placeholder="Enter Ad Name" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Ad Slot ID</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control" placeholder="Enter Slot Ad" />
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex justify-content-end gap-4">
                                <Button
                                    className="btn-light-secondary"

                                    variant="secondary"
                                    onClick={() => handleReset(false)}
                                >
                                    Reset
                                </Button>
                                <Button
                                    className="btn-light-primary"
                                    variant="primary"
                                    onClick={handleSubmit}
                                >
                                    Apply Ads
                                </Button>
                            </div>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Header>
                            <h4 className="fw-medium">Advertisement 2</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm={3}>
                                    <label className="text-color">
                                        My Adsense/Google AdSense
                                    </label>
                                </Col>
                                <Col sm={9}>
                                    <Form>
                                        <div className="mb-3">
                                            <Form.Check
                                                inline
                                                label="My AdSense"
                                                name="group2"
                                                type="radio"
                                                id="inline-radio-2-1"
                                                checked={adType2 === "myadsense"}
                                                onChange={() => setAdType2("myadsense")}
                                            />
                                            <Form.Check
                                                inline
                                                label="Google AdSense"
                                                name="group2"
                                                type="radio"
                                                id="inline-radio-2-2"
                                                checked={adType2 === "googleadsense"}
                                                onChange={() => setAdType2("googleadsense")}
                                            />
                                        </div>
                                    </Form>
                                </Col>
                            </Row>

                            <div
                                id="for_myadsense_2"
                                className={`transition-toggle ${adType2 === "myadsense" ? "show" : "hide"
                                    } d-flex flex-column gap-4`}
                            >
                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Upload Image</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="file" className="form-control" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Alt Tag</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control" placeholder="Enter Alt Tag" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Target URL</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="url" className="form-control" placeholder="Enter Target URL" />
                                    </Col>
                                </Row>
                            </div>

                            <div
                                id="for_googleadsense_2"
                                className={`transition-toggle ${adType2 === "googleadsense" ? "show" : "hide"
                                    } d-flex flex-column gap-4`}
                            >
                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Alt Tag</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control" placeholder="Enter Alt Tag" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Target URL</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="url" className="form-control" placeholder="Enter Target URL" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Ad Name</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control" placeholder="Enter Ad Name" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Ad Slot ID</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control" placeholder="Enter Slot Ad" />
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex justify-content-end gap-4">
                                <Button
                                    className="btn-light-secondary"

                                    variant="secondary"
                                    onClick={() => handleReset(false)}
                                >
                                    Reset
                                </Button>
                                <Button
                                    className="btn-light-primary"
                                    variant="primary"
                                    onClick={handleSubmit}
                                >
                                    Apply Ads
                                </Button>
                            </div>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Header>
                            <h4 className="fw-medium">Advertisement 3</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm={3}>
                                    <label className="text-color">
                                        My Adsense/Google AdSense
                                    </label>
                                </Col>
                                <Col sm={9}>
                                    <Form>
                                        <div className="mb-3">
                                            <Form.Check
                                                inline
                                                label="My AdSense"
                                                name="group2"
                                                type="radio"
                                                id="inline-radio-2-1"
                                                checked={adType2 === "myadsense"}
                                                onChange={() => setAdType2("myadsense")}
                                            />
                                            <Form.Check
                                                inline
                                                label="Google AdSense"
                                                name="group2"
                                                type="radio"
                                                id="inline-radio-2-2"
                                                checked={adType2 === "googleadsense"}
                                                onChange={() => setAdType2("googleadsense")}
                                            />
                                        </div>
                                    </Form>
                                </Col>
                            </Row>

                            <div
                                id="for_myadsense_2"
                                className={`transition-toggle ${adType2 === "myadsense" ? "show" : "hide"
                                    } d-flex flex-column gap-4`}
                            >
                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Upload Image</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="file" className="form-control" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Alt Tag</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control" placeholder="Enter Alt Tag" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Target URL</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="url" className="form-control" placeholder="Enter Target URL" />
                                    </Col>
                                </Row>
                            </div>

                            <div
                                id="for_googleadsense_2"
                                className={`transition-toggle ${adType2 === "googleadsense" ? "show" : "hide"
                                    } d-flex flex-column gap-4`}
                            >
                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Alt Tag</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control" placeholder="Enter Alt Tag" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Target URL</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="url" className="form-control" placeholder="Enter Target URL" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Ad Name</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control" placeholder="Enter Ad Name" />
                                    </Col>
                                </Row>

                                <Row className="align-items-center">
                                    <Col sm={3}>
                                        <label className="text-color">Ad Slot ID</label>
                                    </Col>
                                    <Col sm={9}>
                                        <input type="text" className="form-control" placeholder="Enter Slot Ad" />
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex justify-content-end gap-4">
                                <Button
                                    className="btn-light-secondary"

                                    variant="secondary"
                                    onClick={() => handleReset(false)}
                                >
                                    Reset
                                </Button>
                                <Button
                                    className="btn-light-primary"
                                    variant="primary"
                                    onClick={handleSubmit}
                                >
                                    Apply Ads
                                </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </Container>
        </section>
    );
};

export default ArticlesDetails;