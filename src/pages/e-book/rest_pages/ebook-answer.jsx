import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";

const EBookAnswer = () => {
    const [title] = useState("E-Book Answer");
    const [bullets, setBullets] = useState([{ text: "", enabled: false }]);

    const removeBullet = (index) => {
        const updated = [...bullets];
        updated.splice(index, 1);
        setBullets(updated);
    };

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


    const handleBulletChange = (index, key, value) => {
        const updated = [...bullets];
        updated[index][key] = value;
        setBullets(updated);
    };

    const addBullet = () => {
        setBullets([...bullets, { text: "", enabled: false }]);
    };

    const [descriptionSecond, setMediaLogo] = useState(true);

    const handleMediaLogoToggle = () => {
        setMediaLogo(!descriptionSecond);
        toast.success(`Description Second is ${!descriptionSecond ? 'activated' : 'deactivated'} successfully!`, {
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
                    <div className="d-flex align-items-center justify-content-between">
                        <h3 className="fw-semibold mb-0">{title}</h3>
                        <Form.Check
                            className="form-check-success form-check-solid"
                            type="switch"
                            id="custom-switch-main"
                        />
                    </div>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label htmlFor="">Title</label>
                        </Col>
                        <Col sm={9}>
                            <input type="text" className="form-control form-control-solid" placeholder="Enter Title" />
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label htmlFor="">Description First</label>
                        </Col>
                        <Col sm={9}>
                            <textarea name="" id="" placeholder="Enter Description First" className="form-control form-control-solid"></textarea>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label htmlFor="">Description Second</label>
                        </Col>
                        <Col sm={9}>
                            <div className="d-flex align-items-center justify-content-between gap-2">
                                <textarea name="" id="" placeholder="Enter Description Second" className="form-control form-control-solid"></textarea>
                                <Form.Check
                                    type="switch"
                                    id="description-second-switch"
                                    checked={descriptionSecond}
                                    onChange={handleMediaLogoToggle}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row className="align-items-start">
                        <Col sm={3}><label className="text-color">Bullet Points</label></Col>
                        <Col sm={9}>
                            <AnimatePresence>
                                {bullets.map((bullet, index) => (
                                    <motion.div
                                        key={index}
                                        className="d-flex align-items-center mb-2 gap-2"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Enter Bullet Point"
                                            className="form-control form-control-solid"
                                            value={bullet.text}
                                            onChange={(e) =>
                                                handleBulletChange(index, "text", e.target.value)
                                            }
                                        />
                                        <Form.Check
                                            className="form-check-success form-check-solid"
                                            type="switch"
                                            id={`bullet-switch-${index}`}
                                            checked={bullet.enabled}
                                            onChange={(e) =>
                                                handleBulletChange(index, "enabled", e.target.checked)
                                            }
                                        />
                                        {bullets.length > 1 && (
                                            <Button
                                                variant=""
                                                className="btn-sm flex-box box-32 px-2 py-1 btn-light-danger"
                                                onClick={() => removeBullet(index)}
                                            >
                                                <span class="material-symbols-outlined">
                                                    close
                                                </span>
                                            </Button>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            <div className="d-flex justify-content-end">
                                <Button className="btn btn-light-dark rounded mt-2" onClick={addBullet}>
                                    Add More
                                </Button>
                            </div>
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

export default EBookAnswer;