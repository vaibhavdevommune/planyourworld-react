import React, { useState } from "react";
import { toast } from "react-toastify";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../../../components/button";
import { AnimatePresence, motion } from "framer-motion";

const CourseInstructor = () => {
  const [title] = useState("Course Instructor");

  const [mainTitle, setMainTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bullets, setBullets] = useState([{ text: "", enabled: false }]);
  const [setThumbnail] = useState(null);
  const [altTag, setAltTag] = useState("");
  const [desktopPosition, setDesktopPosition] = useState("left");
  const [url, setUrl] = useState("");
  const [buttonTitle, setButtonTitle] = useState("");

  const handleReset = () => {
    setMainTitle("");
    setDescription("");
    setBullets([{ text: "", enabled: false }]);
    setThumbnail(null);
    setAltTag("");
    setDesktopPosition("left");
    setUrl("");
    setButtonTitle("");

    toast.info("Form has been reset", {
      position: "top-right",
      autoClose: 1500,
    });
  };

  const handleSubmit = () => {
    toast.success("Information saved successfully!", {
      position: "top-right",
      autoClose: 1500,
    });
  };

  const handleStatusChange = () => {
    toast.success("Button Status applied successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleBulletChange = (index, key, value) => {
    const updated = [...bullets];
    updated[index][key] = value;
    setBullets(updated);
  };

  const addBullet = () => {
    setBullets([...bullets, { text: "", enabled: false }]);
  };

  const removeBullet = (index) => {
    const updated = [...bullets];
    updated.splice(index, 1);
    setBullets(updated);
  };

  return (
    <section className="aboutsale">
      <Container>
        <div className="page-card">
          <div className="d-flex align-items-center justify-content-between">
            <h3 className="fw-semibold mb-0">{title}</h3>
            <Form.Check
              className="form-check-success form-check-solid"
              type="switch"
              id="custom-switch-main"
            />
          </div>

          <Row className="align-items-center my-3">
            <Col sm={3}><label className="text-color">Title</label></Col>
            <Col sm={9}>
              <input
                type="text"
                placeholder="Enter Title"
                className="form-control form-control-solid"
                value={mainTitle}
                onChange={(e) => setMainTitle(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="align-items-center my-3">
            <Col sm={3}><label className="text-color">Description</label></Col>
            <Col sm={9}>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Description"
                className="form-control form-control-solid"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="align-items-start my-3">
            <Col sm={3}><label className="text-color">Bullet Points</label></Col>
            <Col sm={9}>
              <AnimatePresence>
                {bullets.map((bullet, index) => (
                  <motion.div
                    key={index}
                    className="d-flex align-items-center mb-2 gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="text"
                      placeholder="Enter Bullet Point"
                      className="form-control form-control-solid"
                      value={bullet.text}
                      onChange={(e) =>
                        handleBulletChange(index, "text", e.target.value)
                      }
                    />
                    <Form.Check
                      className="form-check-success form-check-solid"
                      type="switch"
                      id={`bullet-switch-${index}`}
                      checked={bullet.enabled}
                      onChange={(e) =>
                        handleBulletChange(index, "enabled", e.target.checked)
                      }
                    />
                    {bullets.length > 1 && (
                      <Button
                        variant=""
                        className="btn-sm flex-box box-32 px-2 py-1 btn-light-danger"
                        onClick={() => removeBullet(index)}
                      >
                        <span class="material-symbols-outlined">
                          close
                        </span>
                      </Button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              <div className="d-flex justify-content-end">
                <Button className="btn btn-light-dark rounded mt-2" onClick={addBullet}>
                  Add More
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center mb-3 border-top pt-8">
            <Col sm={3}><label className="text-color">Thumbnail Image</label></Col>
            <Col sm={9}>
              <input
                type="file"
                className="form-control form-control-solid"
                onChange={(e) => setThumbnail(e.target.files[0])}
              />
            </Col>
          </Row>

          <Row className="align-items-center my-3">
            <Col sm={3}><label className="text-color">ALT Tag</label></Col>
            <Col sm={9}>
              <input
                type="text"
                placeholder="Enter ALT Tag"
                className="form-control form-control-solid"
                value={altTag}
                onChange={(e) => setAltTag(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="align-items-center mb-3">
            <Col sm={3}><label className="text-color">Desktop Image Position</label></Col>
            <Col sm={9}>
              <Form.Check
                inline
                label="Left"
                name="imagePosition"
                type="radio"
                id="position-left"
                checked={desktopPosition === "left"}
                onChange={() => setDesktopPosition("left")}
              />
              <Form.Check
                inline
                label="Right"
                name="imagePosition"
                type="radio"
                id="position-right"
                checked={desktopPosition === "right"}
                onChange={() => setDesktopPosition("right")}
              />
            </Col>
          </Row>

          <Row className="align-items-center mb-3 border-top pt-8">
            <Col sm={3}><label className="text-color">URL</label></Col>
            <Col sm={9}>
              <input
                type="text"
                placeholder="Enter URL"
                className="form-control form-control-solid"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="align-items-center mb-3">
            <Col sm={3}><label className="text-color">Button Title</label></Col>
            <Col sm={9}>
              <Row className="align-items-center">
                <Col sm={10} lg={11}>
                  <input
                    type="text"
                    placeholder="Enter Button Title"
                    className="form-control form-control-solid"
                    value={buttonTitle}
                    onChange={(e) => setButtonTitle(e.target.value)}
                  />
                </Col>
                <Col sm={2} lg={1}>
                  <Form.Check
                    className="form-check-success form-check-solid"
                    type="switch"
                    id="custom-switch"
                    onChange={handleStatusChange}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <div className="d-flex justify-content-end gap-4 border-top pt-8">
            <Button variant="btn btn-light-secondary" onClick={handleReset}>
              Reset Form
            </Button>
            <Button className="btn btn-light-primary" onClick={handleSubmit}>
              Save Info
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseInstructor;
