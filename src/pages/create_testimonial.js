import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateTestimonial = () => {
    const [showModal, setShowModal] = useState(false);
    const [testimonialDetails, setTestimonialDetails] = useState({
        name: '',
        profilePicture: null,
        designation: '',
        text: '',
        description: '',
        status: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profilePicture') {
            setTestimonialDetails((prevDetails) => ({
                ...prevDetails,
                [name]: files[0],
            }));
        } else {
            setTestimonialDetails((prevDetails) => ({
                ...prevDetails,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('name', testimonialDetails.name);
        formData.append('profilePicture', testimonialDetails.profilePicture);
        formData.append('designation', testimonialDetails.designation);
        formData.append('text', testimonialDetails.text);
        formData.append('description', testimonialDetails.description);
        formData.append('status', testimonialDetails.status);

        try {
            const response = await fetch('YOUR_API_ENDPOINT/testimonials', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Testimonial Created',
                    text: 'Your testimonial has been successfully created!',
                });
                // Reset form and close modal
                setTestimonialDetails({
                    name: '',
                    profilePicture: null,
                    designation: '',
                    text: '',
                    description: '',
                    status: '',
                });
                setShowModal(false);
            } else {
                throw new Error('Failed to create testimonial');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an error creating the testimonial.',
            });
        }
    };

    return (
        <>
            <Button variant="primary" onClick={() => setShowModal(true)}>
                Create New Testimonial
            </Button>

            <Modal 
                show={showModal} 
                onHide={() => setShowModal(false)}
                size="lg"
                aria-labelledby="create-testimonial-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="create-testimonial-modal">
                        Create New Testimonial
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={testimonialDetails.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Profile Picture</Form.Label>
                                    <Form.Control
                                        type="file"
                                        name="profilePicture"
                                        accept="image/*"
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="designation"
                                        value={testimonialDetails.designation}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col sm={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Select
                                        name="status"
                                        value={testimonialDetails.status}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col sm={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Testimonial Text</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="text"
                                        value={testimonialDetails.text}
                                        onChange={handleChange}
                                        rows={3}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col sm={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="description"
                                        value={testimonialDetails.description}
                                        onChange={handleChange}
                                        rows={5}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={() => setShowModal(false)}
                    >
                        Close
                    </Button>
                    <Button 
                        variant="primary" 
                        onClick={handleSubmit}
                    >
                        Create Testimonial
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CreateTestimonial;