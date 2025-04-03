import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Lead from "../pages/lead";
import Articles from "../pages/articles";
import DownloadTools from "../pages/download_tools";
import Coupons from "../pages/coupons";
import CreateCoupons from "../pages/create_coupons";
import Testimonials from "../pages/testimonials";
import CoverageLogo from "../pages/coverage_logo";
import Footer from "../pages/footer";
import TrackRecord from "../pages/track_record";
import CreateTestinomial from "../pages/create_testimonial";

const Mainbar = () => {
    return (
        <>
            <section className="Mainbar">
                {/* <div id="kt_app_content" class="app-content flex-column-fluid">
                    <div id="kt_app_content_container" class="app-container container-fluid"> */}
                        {/* <div className="container"> */}
                            <div className="row">
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/lead" element={<Lead />} />
                                    <Route path="/articles" element={<Articles />} />
                                    <Route path="/download_tools" element={<DownloadTools />} />
                                    <Route path="/coupons" element={<Coupons />} />
                                    <Route path="/create_coupons" element={<CreateCoupons />} />
                                    <Route path="/testimonials" element={<Testimonials />} />
                                    <Route path="/create_testimonial" element={<CreateTestinomial />} />
                                    <Route path="/coverage_logo" element={<CoverageLogo />} />
                                    <Route path="/footer" element={<Footer />} />
                                    <Route path="/track_record" element={<TrackRecord />} />
                                </Routes>
                            {/* </div> */}
                        {/* </div>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Mainbar