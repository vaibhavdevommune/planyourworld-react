import React, { useState } from "react";
import { toast } from "react-toastify";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../../../components/button";

const YouWillLearn = () => {
  const [title] = useState("What You Will Learn");

  const [mainTitle, setMainTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bullets, setBullets] = useState([{ text: "", enabled: false }]);
  const [thumbnail, setThumbnail] = useState(null);
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
    // You can handle API submission here
    toast.success("Information saved successfully!", {
      position: "top-right",
      autoClose: 1500,
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
            <Col sm={3}>
              <label className="text-color">Title</label>
            </Col>
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
            <Col sm={3}>
              <label className="text-color">Description</label>
            </Col>
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
            <Col sm={3}>
              <label className="text-color">Bullet Points</label>
            </Col>
            <Col sm={9}>
              {bullets.map((bullet, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <input
                    type="text"
                    placeholder="Enter Bullet Point"
                    className="form-control form-control-solid me-3"
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
                </div>
              ))}
              <Button className="btn btn-light-primary mt-2" onClick={addBullet}>
                Add More
              </Button>
            </Col>
          </Row>

          <Row className="align-items-center mb-3 border-top pt-8">
            <Col sm={3}>
              <label className="text-color">Thumbnail Image</label>
            </Col>
            <Col sm={9}>
              <input
                type="file"
                className="form-control form-control-solid"
                onChange={(e) => setThumbnail(e.target.files[0])}
              />
            </Col>
          </Row>

          <Row className="align-items-center my-3">
            <Col sm={3}>
              <label className="text-color">ALT Tag</label>
            </Col>
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
            <Col sm={3}>
              <label className="text-color">Desktop Image Position</label>
            </Col>
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
            <Col sm={3}>
              <label className="text-color">URL</label>
            </Col>
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
            <Col sm={3}>
              <label className="text-color">Button Title</label>
            </Col>
            <Col sm={9}>
              <input
                type="text"
                placeholder="Enter Button Title"
                className="form-control form-control-solid"
                value={buttonTitle}
                onChange={(e) => setButtonTitle(e.target.value)}
              />
            </Col>
          </Row>

          <div className="d-flex justify-content-end gap-4 border-top pt-8">
            <Button variant="secondary" onClick={handleReset}>
              Reset Form
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Info
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default YouWillLearn;