import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const DownloadToolModal = ({ showModal, handleClose, handleSave }) => {
    const [toolName, setToolName] = useState("");
    const [slug, setSlug] = useState("");
    const [file, setFile] = useState(null);
    const [courseName, setCourseName] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Perform validation and save logic
        handleSave({ toolName, slug, file, courseName });
        handleClose(); // Close modal after saving
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Download Tool</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-5">
                            <label htmlFor="toolName" className="form-label">Tool Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="toolName"
                                value={toolName}
                                onChange={(e) => setToolName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="slug" className="form-label">Slug</label>
                            <input
                                type="text"
                                className="form-control"
                                id="slug"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="file" className="form-label">File</label>
                            <input
                                type="file"
                                className="form-control"
                                id="file"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="courseName" className="form-label">Course Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="courseName"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="d-flex justify-content-end">
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" className="ms-2">
                                Save Tool
                            </Button>
                        </div>
                    </form>               
            </Modal.Body>
        </Modal >
    );
};

export default DownloadToolModal;
