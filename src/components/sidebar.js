import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const [isCouponsOpen, setIsCouponsOpen] = useState(location.pathname.includes("/coupons"));

    const toggleCouponsMenu = () => {
        setIsCouponsOpen(!isCouponsOpen);
    };

    return (
        <section className="Sidebar">
            <div className="menu-item">
                <Link to="/dashboard" className={`menu-link ${location.pathname === "/dashboard" ? "active" : ""}`}>
                    <div className="menu-icon">
                        <span className="material-symbols-outlined">dashboard_customize</span>
                    </div>
                    <div className="menu-title">Dashboard</div>
                </Link>

                <Link to="/lead" className={`menu-link ${location.pathname === "/lead" ? "active" : ""}`}>
                    <div className="menu-icon">
                        <span className="material-symbols-outlined">leaderboard</span>
                    </div>
                    <div className="menu-title">Leads</div>
                </Link>

                <Link to="/articles" className={`menu-link ${location.pathname === "/articles" ? "active" : ""}`}>
                    <div className="menu-icon">
                        <span className="material-symbols-outlined">newspaper</span>
                    </div>
                    <div className="menu-title">Articles</div>
                </Link>

                <Link to="/download_tools" className={`menu-link ${location.pathname === "/download_tools" ? "active" : ""}`}>
                    <div className="menu-icon">
                        <span className="material-symbols-outlined">downloading</span>
                    </div>
                    <div className="menu-title">Download Tools</div>
                </Link>

                <Link to="/coupons" className={`menu-link ${location.pathname === "/coupons" || location.pathname === "/create_coupons" ? "active" : ""}`}>
                    <div className="menu-icon">
                        <span className="material-symbols-outlined">editor_choice</span>
                    </div>
                    <div className="menu-title">coupons</div>
                </Link>

                {/* Coupons Menu with Submenu */}
                <div className="menu-item">
                    <div
                        className={`menu-link ${["/testimonials", "/coverage_logo", "/footer", "/track_record"].some(path => location.pathname.includes(path))
                                ? "active"
                                : ""
                            }`}
                        onClick={toggleCouponsMenu}
                    >
                        <div className="menu-icon">
                            <span className="material-symbols-outlined">segment</span>
                        </div>
                        <div className="menu-title">Section</div>
                        <div className="menu-arrow">
                            <span className={`material-symbols-outlined ${isCouponsOpen ? "rotate-90" : ""}`}>
                                arrow_right
                            </span>
                        </div>
                    </div>

                    <div className={`submenu ${isCouponsOpen ? "" : "d-none"}`}>
                        <Link to="/testimonials" className={`menu-link ${location.pathname === "/testimonials" ? "active" : ""}`}>
                            <div className="menu-title">
                                Testimonials
                            </div>
                        </Link>

                        <Link to="/coverage_logo" className={`menu-link ${location.pathname === "/coverage_logo" ? "active" : ""}`}>
                            <div className="menu-title">
                                Coverage & Logo
                            </div>
                        </Link>

                        <Link to="/footer" className={`menu-link ${location.pathname === "/footer" ? "active" : ""}`}>
                            <div className="menu-title">
                                Footer
                            </div>
                        </Link>

                        <Link to="/track_record" className={`menu-link ${location.pathname === "/track_record" ? "active" : ""}`}>
                            <div className="menu-title">
                                Track Record
                            </div>
                        </Link>
                    </div>
                </div>

                <Link to="/products" className={`menu-link ${location.pathname === "/products" || location.pathname === "/create_products" ? "active" : ""}`}>
                    <div className="menu-icon">
                        <span className="material-symbols-outlined">production_quantity_limits</span>
                    </div>
                    <div className="menu-title">Products</div>
                </Link>
                
                <Link to="/advertisements" className={`menu-link ${location.pathname === "/advertisements" || location.pathname === "/advertisements" ? "active" : ""}`}>
                    <div className="menu-icon">
                        <span className="material-symbols-outlined">category</span>
                    </div>
                    <div className="menu-title">Advertisements</div>
                </Link>
                
                <Link to="/sales" className={`menu-link ${location.pathname === "/sales" || location.pathname === "/create_sales"  ? "active" : ""}`}>
                    <div className="menu-icon">
                        <span className="material-symbols-outlined">paid</span>
                    </div>
                    <div className="menu-title">Sales</div>
                </Link>

                <Link to="/e-book_page" className={`menu-link ${location.pathname === "/e-book_page" || location.pathname === "/create_e-book"  ? "active" : ""}`}>
                    <div className="menu-icon">
                        <span className="material-symbols-outlined">auto_stories</span>
                    </div>
                    <div className="menu-title">E-Book</div>
                </Link>
            </div>
        </section>
    );
};

export default Sidebar;
