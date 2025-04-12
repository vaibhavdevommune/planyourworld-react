import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import HeroSection from "./rest_pages/hero_section";
import EBookContent from "./rest_pages/ebook-content";
import EBookPicture from "./rest_pages/ebook-picture";
import EBookInstructor from "./rest_pages/ebook-instructor";
import EBookGetAnswer from "./rest_pages/ebook-answer";
import EBookTrusted from "./rest_pages/ebook-trusted";
// import EBookLiveSessions from "./rest_pages/ebook-live-sessions";

const CreateEBook = () => {
    const [title] = useState("Create E-Book Page");

    return (
        <section className="sales-page">
            <Container>
                <Row>
                    <Col md={12} className="d-flex justify-content-between align-items-center">
                        <Col xs={12} sm={5} md={5} lg={4}>
                            <div className="title">
                                <h2>{title}</h2>
                            </div>
                            <ol className="breadcrumb breadcrumb-line text-muted fs-6 fw-semibold">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="#">{title}</Link>
                                </li>
                                <li className="breadcrumb-item text-color-secondary">List</li>
                            </ol>
                        </Col>
                        <Col xs={12} sm={7} md={8} lg={8} className="d-flex justify-content-end">
                            <Link to='/e-book_page' className="btn btn-light-secondary text-nowrap d-flex align-items-center justify-content-end w-fc gap-2">
                                <span className="material-symbols-outlined fs-4">
                                    arrow_back
                                </span>
                                Back
                            </Link>
                        </Col>
                    </Col>
                </Row>

                <div className="mt-10 create_sales">
                    <Tab.Container defaultActiveKey="metaSettings">
                        <Row className="left-right-tab">
                            <Col sm={3} xxl={2} className="border-end">
                                <Nav variant="pills" className="flex-column me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <Nav.Item>
                                        <Nav.Link eventKey="metaSettings" className="mb-2" defaultActiveKey="metaSettings">
                                            Meta Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ebookContent" className="mb-2">
                                            E-Book Content
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ebookPicture" className="mb-2">
                                            E-Book Picture
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ebookInstructor" className="mb-2">
                                            E-Book Instructor
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ebookAnswer" className="mb-2">
                                            E-Book Answer
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ebookTrusted" className="mb-2">
                                            E-Book Trusted
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9} xxl={10}>
                                <Tab.Content id="v-pills-tabContent">
                                    <Tab.Pane eventKey="metaSettings" className="">
                                        <HeroSection />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ebookContent" className="">
                                        <EBookContent />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ebookPicture" className="">
                                        <EBookPicture />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ebookInstructor" className="">
                                        <EBookInstructor />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ebookAnswer" className="">
                                        <EBookGetAnswer />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ebookTrusted" className="">
                                        <EBookTrusted />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Container>
        </section>
    );
};

export default CreateEBook;