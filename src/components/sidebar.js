import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    return (
        <>
            <section className="Sidebar">
                <div className="menu-item">
                    <Link to="/dashboard" className={`menu-link ${location.pathname === "/dashboard" ? "active" : ""}`}>
                        <div className="menu-icon">
                            <span className="material-symbols-outlined">
                                dashboard_customize
                            </span>
                        </div>
                        <div className="menu-title">
                            Dashboard
                        </div>
                    </Link>

                    <Link to="/lead" className={`menu-link ${location.pathname === "/lead" ? "active" : ""}`}>
                        <div className="menu-icon">
                            <span className="material-symbols-outlined">
                                leaderboard
                            </span>
                        </div>
                        <div className="menu-title">
                            Leads
                        </div>
                    </Link>

                    <Link to="/articles" className={`menu-link ${location.pathname === "/articles" ? "active" : ""}`}>
                        <div className="menu-icon">
                            <span className="material-symbols-outlined">
                                newspaper
                            </span>
                        </div>
                        <div className="menu-title">
                            Articles
                        </div>
                    </Link>

                    <Link to="/download_tools" className={`menu-link ${location.pathname === "/download_tools" ? "active" : ""}`}>
                        <div className="menu-icon">
                            <span className="material-symbols-outlined">
                                downloading
                            </span>
                        </div>
                        <div className="menu-title">
                            Download Tools
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Sidebar