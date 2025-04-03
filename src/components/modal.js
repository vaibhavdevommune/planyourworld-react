import React, { useState, useEffect } from "react";
import { Modal as BootstrapModal, Button, Form } from "react-bootstrap";

const Modal = ({ showModal, handleClose, handleSave, modalData, title, children }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [imagePreview, setImagePreview] = useState(null); // State for image preview

  useEffect(() => {
    if (modalData) {
      setFormData(modalData);
      if (modalData.mediaPicture && typeof modalData.mediaPicture === "string") {
        setImagePreview(modalData.mediaPicture); // If editing, use existing URL
      } else {
        setImagePreview(null); // Reset preview if no existing image
      }
    } else {
      setFormData({ title: "", description: "" });
      setImagePreview(null);
    }
  }, [modalData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      // Generate preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
  };

  return (
    <BootstrapModal show={showModal} onHide={handleClose} size="lg">
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>
          {title || (modalData?.title ? "Edit " + modalData.title : "New Item")}
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <Form onSubmit={handleSubmit}>
          {children && children({ formData, handleChange, imagePreview })}
        </Form>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default Modal;