import React, { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";

const EBookPicture = () => {
    const [title] = useState("E-Book Picture");
    const [images, setImages] = useState([]);
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

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const previews = files.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));
        setImages(previews);
        toast.success(`${files.length} image(s) uploaded!`);
    };

    const handleDeleteImage = (index) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to delete this image?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                setImages((prev) => prev.filter((_, i) => i !== index));
                toast.info("Image deleted successfully!");
            }
        });
    };

    return (
        <section className="aboutsale py-4">
            <Container>
                <div className="page-card">
                    <h3 className="fw-semibold mb-4">{title}</h3>

                    <Row className="align-items-center mb-4">
                        <Col sm={3}>
                            <label htmlFor="ebookPic" className="form-label">
                                Upload E-Book Picture
                            </label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control
                                type="file"
                                multiple
                                onChange={handleFileChange}
                                className="form-control"
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={3}>
                        </Col>
                        <Col sm={9}>
                            {images.length === 0 ? (
                                <p className="text-muted d-none">No image uploaded.</p>
                            ) : (
                                <div className="d-flex flex-wrap gap-4">
                                    <AnimatePresence>
                                        {images.map((img, index) => (
                                            <motion.div
                                                key={img.url}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="position-relative"
                                                style={{ width: "150px", aspectRatio: "1" }}
                                            >
                                                <img
                                                    src={img.url}
                                                    alt={`upload-${index}`}
                                                    className="img-fluid rounded border"
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-sm btn-light-danger flex-box box-32 position-absolute translate-middle"
                                                    style={{
                                                        zIndex: "10", top: "16px",
                                                        right: "-20px"
                                                    }}
                                                    onClick={() => handleDeleteImage(index)}
                                                    title="Remove Image"
                                                >
                                                    ✕
                                                </button>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            )}
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

export default EBookPicture;
