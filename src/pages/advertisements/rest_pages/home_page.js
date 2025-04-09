import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import { AnimatePresence, motion } from "framer-motion";

const HomePage = () => {
    const [ads, setAds] = useState([
        { type: "", id: 1 },
        { type: "", id: 2 }
    ]);

    const handleReset = () => {
        setAds([
            { type: "", id: 1 },
            { type: "", id: 2 }
        ]);
        toast.info("Form has been reset", {
            position: "top-right",
            autoClose: 3000,
        });
    };

    const handleSubmit = () => {
        toast.success("Ads applied successfully!", {
            position: "top-right",
            autoClose: 3000,
        });
    };

    const handleAdTypeChange = (index, type) => {
        const updatedAds = [...ads];
        updatedAds[index].type = type;
        setAds(updatedAds);
    };

    const animationVariants = {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
    };

    const renderAdFields = (ad, index) => {
        return (
            <>
                <Row>
                    <Col sm={3}><label className="text-color">My Adsense/Google AdSense</label></Col>
                    <Col sm={9}>
                        <Form>
                            <div className="mb-3">
                                <Form.Check
                                    inline
                                    label="My AdSense"
                                    name={`group${ad.id}`}
                                    type="radio"
                                    id={`inline-radio-${ad.id}-1`}
                                    checked={ad.type === "myadsense"}
                                    onChange={() => handleAdTypeChange(index, "myadsense")}
                                />
                                <Form.Check
                                    inline
                                    label="Google AdSense"
                                    name={`group${ad.id}`}
                                    type="radio"
                                    id={`inline-radio-${ad.id}-2`}
                                    checked={ad.type === "googleadsense"}
                                    onChange={() => handleAdTypeChange(index, "googleadsense")}
                                />
                            </div>
                        </Form>
                    </Col>
                </Row>

                <AnimatePresence mode="wait">
                    {ad.type === "myadsense" && (
                        <motion.div
                            className="d-flex flex-column gap-4"
                            key={`myadsense-${ad.id}`}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={animationVariants}
                            transition={{ duration: 0.3 }}
                        >
                            <Row className="align-items-center">
                                <Col sm={3}><label className="text-color">Upload Image</label></Col>
                                <Col sm={9}><input type="file" className="form-control" /></Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col sm={3}><label className="text-color">Alt Tag</label></Col>
                                <Col sm={9}><input type="text" className="form-control" placeholder="Enter Alt Tag" /></Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col sm={3}><label className="text-color">Target URL</label></Col>
                                <Col sm={9}><input type="url" className="form-control" placeholder="Enter Target URL" /></Col>
                            </Row>
                        </motion.div>
                    )}

                    {ad.type === "googleadsense" && (
                        <motion.div
                            className="d-flex flex-column gap-4"
                            key={`googleadsense-${ad.id}`}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={animationVariants}
                            transition={{ duration: 0.3 }}
                        >
                            <Row className="align-items-center">
                                <Col sm={3}><label className="text-color">Alt Tag</label></Col>
                                <Col sm={9}><input type="text" className="form-control" placeholder="Enter Alt Tag" /></Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col sm={3}><label className="text-color">Target URL</label></Col>
                                <Col sm={9}><input type="url" className="form-control" placeholder="Enter Target URL" /></Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col sm={3}><label className="text-color">Ad Name</label></Col>
                                <Col sm={9}><input type="text" className="form-control" placeholder="Enter Ad Name" /></Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col sm={3}><label className="text-color">Ad Slot ID</label></Col>
                                <Col sm={9}><input type="text" className="form-control" placeholder="Enter Slot Ad" /></Col>
                            </Row>
                        </motion.div>
                    )}
                </AnimatePresence>
            </>
        );
    };

    return (
        <section className="allarticles">
            <Container>
                <div className="page-card">
                    <h3 className="fw-semibold">All Articles Page</h3>

                    {ads.map((ad, index) => (
                        <Card key={ad.id} className="mb-4">
                            <Card.Header>
                                <h4 className="fw-medium">Advertisement {ad.id}</h4>
                            </Card.Header>
                            <Card.Body>
                                {renderAdFields(ad, index)}
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex justify-content-end gap-4">
                                    <Button variant="secondary" onClick={handleReset}>
                                        Reset
                                    </Button>
                                    <Button variant="primary" onClick={handleSubmit}>
                                        Apply Ads
                                    </Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default HomePage;
