import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const CreateProduct = () => {
  const [title] = useState("Coupons");
  const [couponDetails, setCouponDetails] = useState({
    title: "",
    thumbnail: null, 
    type: "",
    category: "",
    price: "0", 
    status: "",
    offerAmount: "",
    appliedOn: "",
    startDate: "",
    endDate: "",
    useLimit: "",
    autoApply: "",
    createdAt: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setCouponDetails((prevDetails) => ({
      ...prevDetails,
      [name]: files ? files[0] : value, 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product created:", couponDetails);
    Swal.fire({
      icon: "success",
      title: "Product Created",
      text: "Your product has been successfully created!",
    });
  };

  return (
    <section className="createproduct">
      <Container>
        <h2>Create New {title}</h2>
        <ol className="breadcrumb breadcrumb-line text-muted fs-6 fw-semibold">
          <li className="breadcrumb-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">{title}</Link>
          </li>
          <li className="breadcrumb-item text-color-secondary">List</li>
        </ol>
        <Form className="mt-8" onSubmit={handleSubmit}>
          <Row>
            <Col sm={6}>
              <Form.Group className="mb-5">
                <Form.Label>Product Title</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control form-control-solid"
                  name="title"
                  value={couponDetails.title}
                  onChange={handleChange}
                  placeholder="Enter Product Title"
                  required
                />
              </Form.Group>
            </Col>

            <Col sm={6}>
              <Form.Group className="mb-5">
                <Form.Label>Product Thumbnail</Form.Label>
                <Form.Control
                  type="file"
                  className="form-control form-control-solid"
                  name="thumbnail"
                  onChange={handleChange} 
                  accept="image/*"
                  required
                />
              </Form.Group>
            </Col>

            <Col sm={6}>
              <Form.Group className="mb-5">
                <Form.Label>Product Type</Form.Label>
                <Form.Select
                  className="form-select form-select-solid"
                  name="type"
                  value={couponDetails.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Product Type</option>
                  <option value="Live Session">Live Session</option>
                  <option value="Recorded">Recorded</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col sm={6}>
              <Form.Group className="mb-5">
                <Form.Label>Product Category</Form.Label>
                <Form.Select
                  className="form-select form-select-solid"
                  name="category"
                  value={couponDetails.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Product Category</option>
                  <option value="Sales">Sales</option>
                  <option value="Share">Share</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col sm={6}>
              <Form.Group className="mb-5">
                <Form.Label>Product Price</Form.Label>
                <InputGroup>
                  <InputGroup.Text className="border-0">₹</InputGroup.Text>
                  <Form.Control
                    type="number"
                    className="form-control form-control-solid"
                    name="price"
                    id="product_price"
                    value={couponDetails.price}
                    onChange={handleChange}
                    placeholder="Enter Product Price"
                    min="0"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            <Col sm={6}>
              <Form.Group className="mb-5">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  className="form-select form-select-solid"
                  name="status"
                  value={couponDetails.status}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-end mt-8">
            <Button type="submit" variant="primary" className="btn btn-light-primary">
              Create Product
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default CreateProduct;