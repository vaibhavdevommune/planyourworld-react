import React, { useState } from "react";
import { toast } from "react-toastify";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../../../components/button";
import { AnimatePresence, motion } from "framer-motion";

const SalesGoals = () => {
  const [title] = useState("Sales Goals");

  const [goal1, setGoal1] = useState("");
  const [goal2, setGoal2] = useState("");
  const [goal3, setGoal3] = useState("");

  const handleReset = () => {
    setGoal1("");
    setGoal2("");
    setGoal3("");

    toast.info("Sales Goals has been reset", {
      position: "top-right",
      autoClose: 1500,
    });
  };

  const handleSubmit = () => {
    toast.success("Sales Goals saved successfully!", {
      position: "top-right",
      autoClose: 1500,
    });
  };

  return (
    <section className="aboutsale">
      <Container>
        <motion.div
          className="page-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="fw-semibold mb-0">{title}</h3>
            <Form.Check
              className="form-check-success form-check-solid"
              type="switch"
              id="custom-switch-main"
            />
          </div>

          <AnimatePresence>
            <motion.div
              key="goals"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Row className="align-items-center my-3">
                <Col sm={3}><label className="text-color">Goal 1</label></Col>
                <Col sm={9}>
                  <input
                    type="text"
                    placeholder="Enter Goal 1"
                    className="form-control form-control-solid"
                    value={goal1}
                    onChange={(e) => setGoal1(e.target.value)}
                  />
                </Col>
              </Row>

              <Row className="align-items-center my-3">
                <Col sm={3}><label className="text-color">Goal 2</label></Col>
                <Col sm={9}>
                  <input
                    type="text"
                    placeholder="Enter Goal 2"
                    className="form-control form-control-solid"
                    value={goal2}
                    onChange={(e) => setGoal2(e.target.value)}
                  />
                </Col>
              </Row>

              <Row className="align-items-center my-3">
                <Col sm={3}><label className="text-color">Goal 3</label></Col>
                <Col sm={9}>
                  <input
                    type="text"
                    placeholder="Enter Goal 3"
                    className="form-control form-control-solid"
                    value={goal3}
                    onChange={(e) => setGoal3(e.target.value)}
                  />
                </Col>
              </Row>
            </motion.div>
          </AnimatePresence>

          <div className="d-flex justify-content-end gap-4 border-top pt-8">
            <Button variant="btn btn-light-secondary" onClick={handleReset}>
              Reset Form
            </Button>
            <Button className="btn btn-light-primary" onClick={handleSubmit}>
              Save Info
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SalesGoals;
