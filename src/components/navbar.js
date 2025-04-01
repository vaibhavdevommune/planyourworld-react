import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/images/favi.svg";
import user from "../assets/images/user.png";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Toggle dropdown on profile picture click
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section className="navbar">
            <div className="navbar-container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-7">
                        <div className="left-navbar">
                            <span className="material-symbols-outlined">
                                menu_open
                            </span>
                            <div className="brand">
                                <img src={logo} alt="Logo" />
                                <p>Plan Your World</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-5">
                        <div className="right-navbar">
                            <div className="user" ref={dropdownRef}>
                                {/* Profile Picture */}
                                <img 
                                    src={user} 
                                    alt="User" 
                                    id="profile_picture" 
                                    onClick={toggleDropdown} 
                                    className="profile-img"
                                />

                                {/* Dropdown Menu */}
                                <div className={`setting-option ${showDropdown ? "show" : "d-none"}`}>
                                    <div className="user-details">
                                        <img src={user} alt="User" />
                                        <div className="d-flex flex-column gap-0">
                                            <h6>Admin</h6>
                                            <p>admin@admin.com</p>
                                        </div>
                                    </div>
                                    <ul className="option-container">
                                        <li className="option-list">
                                            <Link to="#" className="option-items">My Profile</Link>
                                        </li>
                                        <li className="option-list">
                                            <Link to="#" className="option-items">Sign Out</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
