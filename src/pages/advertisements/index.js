import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import HomePage from '../advertisements/rest_pages/home_page'
import AllArticles from "./rest_pages/all_articles";
import ArticlesDetails from "./rest_pages/articles_details";

const Advertisements = () => {
    const [title] = useState("Advertisements");

    return (
        <section className="advertisements">
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
                    </Col>
                </Row>

                <div className="mt-10">
                    <Tab.Container defaultActiveKey="advertise">
                        <Row  className="left-right-tab">
                            <Col sm={2} className="border-end">
                                <Nav
                                    variant="pills"
                                    className="flex-column me-3"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <Nav.Item>
                                        <Nav.Link eventKey="homePage" className="mb-2">
                                            Home Page
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="all_articles" className="mb-2">
                                            All Articles
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="articleDetails" className="mb-2">
                                            Article Details
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>
                                <Tab.Content id="v-pills-tabContent">
                                    <Tab.Pane eventKey="homePage" className="fade">
                                        <HomePage/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="all_articles" className="fade">
                                        <AllArticles/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="articleDetails" className="fade">
                                        <ArticlesDetails/>
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

export default Advertisements;