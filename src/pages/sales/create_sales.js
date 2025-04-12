import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import AboutSales from "./rest_pages/about_sales";
import HeroSection from "./rest_pages/hero_section";
import YouWillLearn from "./rest_pages/you_will_learn";
import ViplavExpertise from "./rest_pages/viplav_expertise";
import CourseInstructor from "./rest_pages/course_instructor";
import NeedUs from "./rest_pages/need_us";
import SalesGoals from "./rest_pages/sales_goals";
import RegisterForm1 from "./rest_pages/register_form_1";
import ArticlesDetails from "./rest_pages/articles_details";

const CreateSales = () => {
    const [title] = useState("Create Sales Page");

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
                            <Link to='/sales' className="btn btn-light-secondary text-nowrap d-flex align-items-center justify-content-end w-fc gap-2">
                                <span class="material-symbols-outlined fs-4">
                                    arrow_back
                                </span>
                                Back
                            </Link>
                        </Col>
                    </Col>
                </Row>

                <div className="mt-10 create_sales">
                    <Tab.Container defaultActiveKey="advertise">
                        <Row className="left-right-tab">
                            <Col sm={3} xxl={2} className="border-end">
                                <Nav variant="pills" className="flex-column me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <Nav.Item>
                                        <Nav.Link eventKey="aboutSales" className="mb-2">
                                            About Sales
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="hero_section" className="mb-2">
                                            Hero Section
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="will_learn" className="mb-2">
                                            What you will learn
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ViplavExpertise" className="mb-2">
                                            Viplav Expertise
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="courseInstructor" className="mb-2">
                                            Course Instructor
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="youNeedUs" className="mb-2">
                                            Why You Need Us
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="salesGoals" className="mb-2">
                                            3 Sales Goals
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="registerform1" className="mb-2">
                                            Register Form 1
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ourexpertise" className="mb-2">
                                            Our Expertise
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="salesCurriculum" className="mb-2">
                                            Sales Curriculum
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="thisFor" className="mb-2">
                                            Who is this for ?
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="exclusiveBonus" className="mb-2">
                                            Exclusive Bonus
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9} xxl={10}>
                                <Tab.Content id="v-pills-tabContent">
                                    <Tab.Pane eventKey="aboutSales" className="fade">
                                        <AboutSales />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="hero_section" className="fade">
                                        <HeroSection />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="will_learn" className="fade">
                                        <YouWillLearn />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ViplavExpertise" className="fade">
                                        <ViplavExpertise />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="courseInstructor" className="fade">
                                        <CourseInstructor />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="youNeedUs" className="fade">
                                        <NeedUs />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="salesGoals" className="fade">
                                        <SalesGoals />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="registerform1" className="fade">
                                        <RegisterForm1 />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ourexpertise" className="fade">
                                        <ArticlesDetails />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="salesCurriculum" className="fade">
                                        <ArticlesDetails />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="thisFor" className="fade">
                                        <ArticlesDetails />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="exclusiveBonus" className="fade">
                                        <ArticlesDetails />
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

export default CreateSales;