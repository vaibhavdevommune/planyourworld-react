import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => {
  const [title] = useState("Footer");

  // Separate state for each menu
  const [menu1Items, setMenu1Items] = useState([
    { id: Date.now(), name: "", link: "", isActive: false, isNew: true },
  ]);
  const [menu2Items, setMenu2Items] = useState([
    { id: Date.now() + 1, name: "", link: "", isActive: false, isNew: true },
  ]);
  const [menu3Items, setMenu3Items] = useState([
    { id: Date.now() + 2, name: "", link: "", isActive: false, isNew: true },
  ]);
  const [menuTitles, setMenuTitles] = useState({
    menu1: "",
    menu2: "",
    menu3: "",
  });

  const handleAddLead = () => {
    const footerData = {
      menu1: { title: menuTitles.menu1, items: menu1Items },
      menu2: { title: menuTitles.menu2, items: menu2Items },
      menu3: { title: menuTitles.menu3, items: menu3Items },
    };
    console.log("Footer content saved:", footerData);
    alert("Footer content saved successfully!");
    // Optional API call:
    // fetch("YOUR_API_ENDPOINT/footer", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(footerData),
    // }).then(response => response.ok ? alert("Saved!") : alert("Error!"));
  };

  const handleAddMenuItem = (setter) => {
    const newItem = { id: Date.now(), name: "", link: "", isActive: false, isNew: true };
    setter((prevItems) => [...prevItems, newItem]);
    setTimeout(() => {
      setter((prevItems) =>
        prevItems.map((item) =>
          item.id === newItem.id ? { ...item, isNew: false } : item
        )
      );
    }, 300);
  };

  const handleRemoveMenuItem = (id, setter) => {
    setter((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isRemoving: true } : item
      )
    );
    setTimeout(() => {
      setter((prevItems) => prevItems.filter((item) => item.id !== id));
    }, 300);
  };

  const handleChange = (id, field, value, setter) => {
    setter((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleToggleSwitch = (id, setter) => {
    setter((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const handleTitleChange = (menuKey, value) => {
    setMenuTitles((prev) => ({ ...prev, [menuKey]: value }));
  };

  const renderMenuSection = (menuItems, setter, menuNum) => (
    <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center w-100">
          <h4>Menu {menuNum}</h4>
          <div className="d-flex gap-4 align-items-center">
            <Form.Check type="switch" id={`custom-switch-header-${menuNum}`} label="" />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div id={`menu-items-${menuNum}`}>
          <Row className="align-items-center mb-3">
            <Col sm={12} md={3}>
              <label htmlFor="" className="text-color">
                Title
              </label>
            </Col>
            <Col sm={12} md={9}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Title"
                value={menuTitles[`menu${menuNum}`]}
                onChange={(e) => handleTitleChange(`menu${menuNum}`, e.target.value)}
              />
            </Col>
          </Row>

          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`menu-item-row ${
                item.isRemoving ? "fade-out" : item.isNew ? "fade-in-scale" : ""
              }`}
            >
              <Row className="align-items-center mb-3">
                <Col sm={12} md={3}>
                  <label htmlFor="" className="text-color">
                    Menu Items
                  </label>
                </Col>
                <Col sm={12} md={9}>
                  <Row className="align-items-center">
                    <Col md={5}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Menu Items"
                        value={item.name}
                        onChange={(e) =>
                          handleChange(item.id, "name", e.target.value, setter)
                        }
                      />
                    </Col>
                    <Col md={5}>
                      <input
                        type="url"
                        className="form-control"
                        placeholder="Enter Your Menu Link"
                        value={item.link}
                        onChange={(e) =>
                          handleChange(item.id, "link", e.target.value, setter)
                        }
                      />
                    </Col>
                    <Col md={2}>
                      <div className="d-flex gap-4 align-items-center">
                        <Form.Check
                          type="switch"
                          id={`custom-switch-${item.id}`}
                          label=""
                          checked={item.isActive}
                          onChange={() => handleToggleSwitch(item.id, setter)}
                        />
                        <Button
                          variant="light-danger"
                          className="flex-box box-32"
                          onClick={() => handleRemoveMenuItem(item.id, setter)}
                        >
                          <span className="material-symbols-outlined">close</span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          ))}
        </div>

        <Button
          onClick={() => handleAddMenuItem(setter)}
          className="d-flex align-items-center gap-2 btn btn-light-primary w-fc ms-auto mt-5"
        >
          <span className="material-symbols-outlined fs-4">add</span>
          Add Menu Item
        </Button>
      </div>
    </div>
  );

  return (
    <section className="footer">
      <Row>
        <Col md={12} className="d-flex justify-content-start align-items-center">
          <Col sm={5} md={12}>
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
        <div className="footerContent">
          {renderMenuSection(menu1Items, setMenu1Items, 1)}
          {renderMenuSection(menu2Items, setMenu2Items, 2)}
          {renderMenuSection(menu3Items, setMenu3Items, 3)}

          <Button
            onClick={handleAddLead}
            className="btn btn-light-primary ms-auto d-flex align-items-center gap-2"
          >
            <span className="material-symbols-outlined">save</span>
            Save Section
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Footer;