import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import DatePicker from "../../../components/flatpickr";
import { AnimatePresence, motion } from "framer-motion";

const HeroSection = () => {
    const [title] = useState("Hero Section");

    const [title1, setTitle1] = useState("");
    const [title2, setTitle2] = useState("");
    const [title3, setTitle3] = useState("");
    const [title4, setTitle4] = useState("");

    const [mediaType, setMediaType] = useState("");
    const [courseType, setCourseType] = useState("");

    const handleReset = () => {
        setTitle1("");
        setTitle2("");
        setTitle3("");
        setTitle4("");
        setMediaType("");
        setCourseType("");
        toast.info("About Sales form has been reset", {
            position: "top-right",
            autoClose: 1500,
        });
    };

    const handleSubmit = () => {
        toast.success("About Sales Created successfully!", {
            position: "top-right",
            autoClose: 1500,
        });
    };

    return (
        <section className="aboutsale">
            <Container>
                <div className="page-card">
                    <h3 className="fw-semibold">{title}</h3>

                    {[{ label: "Title 1 (18px)", state: title1, setter: setTitle1 },
                    { label: "Title 2 (74px) (Main)", state: title2, setter: setTitle2 },
                    { label: "Title 3 (42px)", state: title3, setter: setTitle3 },
                    { label: "Title 4 (24px)", state: title4, setter: setTitle4 }].map((item, idx) => (
                        <Row key={idx} className="align-items-center mb-3">
                            <Col sm={3}><label>{item.label} sddd</label></Col>
                            <Col sm={9}>
                                <input
                                    type="text"
                                    className="form-control form-control-solid"
                                    placeholder={`Enter ${item.label}`}
                                    value={item.state}
                                    onChange={(e) => item.setter(e.target.value)}
                                />
                            </Col>
                        </Row>
                    ))}

                    <Row className="align-items-center border-top pt-8 mb-3">
                        <Col sm={3}><label className="text-color">Video or Background Image</label></Col>
                        <Col sm={9}>
                            <Form>
                                <Form.Check
                                    inline
                                    label="Video"
                                    name="mediaType"
                                    type="radio"
                                    id="media-video"
                                    checked={mediaType === "video"}
                                    onChange={() => setMediaType("video")}
                                />
                                <Form.Check
                                    inline
                                    label="Image"
                                    name="mediaType"
                                    type="radio"
                                    id="media-image"
                                    checked={mediaType === "image"}
                                    onChange={() => setMediaType("image")}
                                />
                            </Form>
                        </Col>
                    </Row>

                    <AnimatePresence mode="wait">
                        {mediaType === "video" && (
                            <motion.div
                                key="video-input"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Row className="align-items-center mb-3">
                                    <Col sm={3}><label className="text-color">Upload Video</label></Col>
                                    <Col sm={9}>
                                        <input type="file" className="form-control form-control-solid" />
                                    </Col>
                                </Row>
                            </motion.div>
                        )}

                        {mediaType === "image" && (
                            <motion.div
                                key="image-input"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Row className="align-items-center mb-3">
                                    <Col sm={3}><label className="text-color">Thumbnail Image</label></Col>
                                    <Col sm={9}>
                                        <input type="file" className="form-control form-control-solid" />
                                    </Col>
                                </Row>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label className="text-color">ALT Tag</label>
                        </Col>
                        <Col sm={9}>
                            <input type="text" placeholder="Enter ALT Tag" className="form-control form-control-solid" />
                        </Col>
                    </Row>

                    <Row className="align-items-center border-top pt-8 mb-3">
                        <Col sm={3}><label className="text-color">Course Type</label></Col>
                        <Col sm={9}>
                            <Form>
                                <Form.Check
                                    inline
                                    label="Free"
                                    name="courseType"
                                    type="radio"
                                    id="free-course"
                                    checked={courseType === "Free"}
                                    onChange={() => setCourseType("Free")}
                                />
                                <Form.Check
                                    inline
                                    label="Paid"
                                    name="courseType"
                                    type="radio"
                                    id="paid-course"
                                    checked={courseType === "Paid"}
                                    onChange={() => setCourseType("Paid")}
                                />
                            </Form>
                        </Col>
                    </Row>

                    <AnimatePresence mode="wait">
                        {courseType === "Free" && (
                            <motion.div
                                key="Free-input"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Row className="align-items-center mb-3 d-none">
                                    <Col sm={3}><label className="text-color">Upload Video</label></Col>
                                    <Col sm={9}>
                                        <input type="file" className="form-control form-control-solid" />
                                    </Col>
                                </Row>
                            </motion.div>
                        )}

                        {courseType === "Paid" && (
                            <motion.div
                                key="Paid-input"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Row className="align-items-center mb-3">
                                    <Col sm={3}><label className="text-color">Price (Selling Price)</label></Col>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroup.Text className="border-0">₹</InputGroup.Text>
                                            <Form.Control
                                                type="number"
                                                className="form-control form-control-solid"
                                                placeholder="Enter Selling Price"
                                                min="0"
                                                required
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>

                                <Row className="align-items-center mb-3">
                                    <Col sm={3}><label className="text-color">Discount Price</label></Col>
                                    <Col sm={9}>
                                        <InputGroup>
                                            <InputGroup.Text className="border-0">₹</InputGroup.Text>
                                            <Form.Control
                                                type="number"
                                                className="form-control form-control-solid"
                                                placeholder="Enter Discount Price"
                                                min="0"
                                                required
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <Row className="align-items-center mb-3 border-top pt-8">
                        <Col sm={3}><label className="text-color">Button Title</label></Col>
                        <Col sm={9}>
                            <input type="text" placeholder="Enter Button Title" className="form-control form-control-solid" />
                        </Col>
                    </Row>

                    <Row className="align-items-center mb-3">
                        <Col sm={3}><label className="text-color">Sales Date & Time</label></Col>
                        <Col sm={9}>
                            <DatePicker className="form-control form-control-solid"/>
                        </Col>
                    </Row>

                    <div className="d-flex justify-content-end gap-4 border-top pt-8">
                        <Button variant="secondary" onClick={handleReset}>
                            Reset About Sales
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Create About Sales
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
