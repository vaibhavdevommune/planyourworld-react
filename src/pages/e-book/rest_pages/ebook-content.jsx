import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import TagInput from '../../../components/TagInput'

const EBookContent = () => {
    const [title] = useState("E-Book Content");
    const [bullets, setBullets] = useState([{ text: "", enabled: false }]);

    const removeBullet = (index) => {
        const updated = [...bullets];
        updated.splice(index, 1);
        setBullets(updated);
    };


    const handleBulletChange = (index, key, value) => {
        const updated = [...bullets];
        updated[index][key] = value;
        setBullets(updated);
    };

    const addBullet = () => {
        setBullets([...bullets, { text: "", enabled: false }]);
    };

    const [mediaLogo, setMediaLogo] = useState(true);

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

    return (
        <section className="aboutsale">
            <Container>
                <div className="page-card">
                    <h3 className="fw-semibold">{title}</h3>

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
                            <label htmlFor="">Author</label>
                        </Col>
                        <Col sm={9}>
                            <input type="text" className="form-control form-control-solid" placeholder="Enter Author Name" />
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
                            <Row className="align-items-center">
                                <Col sm={11}>
                                    <textarea name="" id="" placeholder="Enter Description Second" className="form-control form-control-solid"></textarea>
                                </Col>
                                <Col sm={1}>
                                    <Form.Check
                                        type="switch"
                                        id="media-logo-switch"
                                        checked={mediaLogo}
                                        onChange={handleMediaLogoToggle}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label htmlFor="">What will be Covered Points</label>
                        </Col>
                        <Col sm={9}>
                            <input type="text" className="form-control form-control-solid" placeholder="Enter Enter What will be Covered Points" />
                        </Col>
                    </Row>

                    <Row className="align-items-start my-3">
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

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label htmlFor="">Price (Selling Price)</label>
                        </Col>
                        <Col sm={9}>
                            <InputGroup>
                                <InputGroup.Text className="border-0">₹</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    className="form-control form-control-solid"
                                    name="price"
                                    id="product_price"
                                    placeholder="Enter Product Price"
                                    min="0"
                                    required
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className="align-items-center">
                        <Col sm={3}>
                            <label htmlFor="">Discount (Discount Price)</label>
                        </Col>
                        <Col sm={9}>
                            <InputGroup>
                                <InputGroup.Text className="border-0">₹</InputGroup.Text>
                                <Form.Control
                                    type="number"
                                    className="form-control form-control-solid"
                                    name="price"
                                    id="discount_price"
                                    placeholder="Enter Discount Price"
                                    min="0"
                                    required
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row className="align-items-start">
                        <Col sm={3} className="mt-2">
                            <label htmlFor="">Language</label>
                        </Col>
                        <Col sm={9}>
                            <TagInput />
                        </Col>
                    </Row>


                </div>
            </Container>
        </section>
    );
};

export default EBookContent;