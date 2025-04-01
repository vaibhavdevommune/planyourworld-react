import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from "../components/flatpickr";

const CreateCoupon = () => {
    const [couponDetails, setCouponDetails] = useState({
        title: '',
        couponCode: '',
        offerAmount: '',
        appliedOn: '',
        startDate: '',
        endDate: '',
        useLimit: '',
        autoApply: '',
        status: '',
        createdAt: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCouponDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Coupon created:', couponDetails);
        Swal.fire({
            icon: 'success',
            title: 'Coupon Created',
            text: 'Your coupon has been successfully created!',
        });
    };

    return (
        <selection className="createcoupons">
            <Container>
                <h2>Create New Coupon</h2>
                <p className="mb-0">Enter the following details to create coupon</p>
                <Form className='mt-8' onSubmit={handleSubmit}>
                    <Row>
                        <Col sm={6}>
                            <div className="mb-5">
                                <label className="form-label">Coupon Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    value={couponDetails.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className="mb-5">
                                <label className="form-label">Coupon Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="couponCode"
                                    value={couponDetails.couponCode}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className="mb-5">
                                <label className="form-label">Offer Amount</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="offerAmount"
                                    value={couponDetails.offerAmount}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className="mb-5">
                                <label className="form-label">Applied On</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="appliedOn"
                                    value={couponDetails.appliedOn}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className="mb-5">
                                <label className="form-label">Start Date</label>
                                {/* <input
                                    type="date"
                                    className="form-control"
                                    name="startDate"
                                    value={couponDetails.startDate}
                                    onChange={handleChange}
                                    required
                                /> */}
                                <DatePicker name="startDate" value={couponDetails.startDate}
                                    onChange={handleChange} />
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className="mb-5">
                                <label className="form-label">End Date</label>
                                {/* <input
                                    type="date"
                                    className="form-control"
                                    name="endDate"
                                    value={couponDetails.endDate}
                                    onChange={handleChange}
                                    required
                                /> */}
                                <DatePicker name="endDate" value={couponDetails.endDate}
                                    onChange={handleChange} />
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className="mb-5">
                                <label className="form-label">Use Limit</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="useLimit"
                                    value={couponDetails.useLimit}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className="mb-5">
                                <label className="form-label">Auto Apply</label>
                                <select
                                    className="form-select"
                                    name="autoApply"
                                    value={couponDetails.autoApply}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Yup">Yes</option>
                                    <option value="Nope">No</option>
                                </select>
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className="mb-5">
                                <label className="form-label">Status</label>
                                <select
                                    className="form-select"
                                    name="status"
                                    value={couponDetails.status}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Confirmed">Confirmed</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div className="mb-5">
                                <label className="form-label">Created At</label>
                                {/* <input
                                    type="date"
                                    className="form-control"
                                    name="createdAt"
                                    value={couponDetails.createdAt}
                                    onChange={handleChange}
                                    required
                                /> */}
                                <DatePicker name="createdAt" value={couponDetails.createdAt}
                                    onChange={handleChange} />
                            </div>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end mt-8">
                        <Button type="submit" className="btn btn-light-primary" variant="Create Coupon">Create Coupon</Button>
                    </div>
                </Form>
            </Container>
        </selection>
    );
};

export default CreateCoupon;
