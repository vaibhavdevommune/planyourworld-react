import React, { useState } from "react";
import DatePicker from "../components/flatpickr";

import Select from "react-select";

const options = [
    { value: "Show All", label: "Show All" },
    { value: "a", label: "Sales A" },
    { value: "b", label: "Sales B" }
];

const Dashboard = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    return (
        <section className="dashboard">
            {/* <div className="container"> */}
            <div className="row total-all-data border-bottom pb-5">
                <div class="col-sm-6 col-md-6 col-xl-4 col-xxl-2 col-12 mb-xxl-2">
                    <div class="card overflow-hidden  mb-5 mb-xl-2">
                        <div class="card-body d-flex justify-content-between flex-column px-0 pb-0">
                            <div class="mb-8 px-9">
                                <div class="d-flex align-items-center mb-2">
                                    <span class="fs-2hx fw-semibold text-color me-2 lh-1">1,420</span>
                                    <span class="badge badge-light-success fs-base">
                                        2.5%</span>
                                </div>
                                <span class="base text-md-nowrap">New Leads</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-xl-4 col-xxl-2 col-12 mb-xxl-2">
                    <div class="card overflow-hidden  mb-5 mb-xl-2">
                        <div class="card-body d-flex justify-content-between flex-column px-0 pb-0">
                            <div class="mb-8 px-9">
                                <div class="d-flex align-items-center mb-2">
                                    <span class="fs-2hx fw-semibold text-color me-2 lh-1">1,420</span>
                                    <span class="badge badge-light-success fs-base">
                                        2.5%</span>
                                </div>
                                <span class="base text-md-nowrap">Total Sales Pages</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-xl-4 col-xxl-2 col-12 mb-xxl-2">
                    <div class="card overflow-hidden  mb-5 mb-xl-2">
                        <div class="card-body d-flex justify-content-between flex-column px-0 pb-0">
                            <div class="mb-8 px-9">
                                <div class="d-flex align-items-center mb-2">
                                    <span class="fs-2hx fw-semibold text-color me-2 lh-1">1,000</span>
                                    <span class="badge badge-light-danger fs-base">
                                        -2.5%</span>
                                </div>
                                <span class="base text-md-nowrap">Total Sales Pages</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-xl-4 col-xxl-2 col-12 mb-xxl-2">
                    <div class="card overflow-hidden  mb-5 mb-xl-2">
                        <div class="card-body d-flex justify-content-between flex-column px-0 pb-0">
                            <div class="mb-8 px-9">
                                <div class="d-flex align-items-center mb-2">
                                    <span class="fs-2hx fw-semibold text-color me-2 lh-1">10,500</span>
                                    <span class="badge badge-light-success fs-base">
                                        2.5%</span>
                                </div>
                                <span class="base text-md-nowrap">Total Buyers</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-xl-4 col-xxl-2 col-12 mb-xxl-2">
                    <div class="card overflow-hidden  mb-5 mb-xl-2">
                        <div class="card-body d-flex justify-content-between flex-column px-0 pb-0">
                            <div class="mb-8 px-9">
                                <div class="d-flex align-items-center mb-2">
                                    <span class="fs-2hx fw-semibold text-color me-2 lh-1">9,870</span>
                                    <span class="badge badge-light-success fs-base">
                                        2.5%</span>
                                </div>
                                <span class="base text-md-nowrap">Total Leads</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-xl-4 col-xxl-2 col-12 mb-xxl-2">
                    <div class="card overflow-hidden  mb-5 mb-xl-2">
                        <div class="card-body d-flex justify-content-between flex-column px-0 pb-0">
                            <div class="mb-8 px-9">
                                <div class="d-flex align-items-center mb-2">
                                    <span class="fs-2hx fw-semibold text-color me-2 lh-1">10,420</span>
                                    <span class="badge badge-light-success fs-base">
                                        2.5%</span>
                                </div>
                                <span class="base text-md-nowrap">Total Earning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card card-flush mt-8">

                <div class="card-header pt-7">

                    <h3 class="card-title align-items-start flex-column">
                        <span class="card-label fw-bold text-gray-900">Sales Purchases</span>
                        <span class="text-color-secondary mt-1 fw-normal fs-6">Recent Bookings from this month</span>
                    </h3>


                    <div class="card-toolbar">

                        <div class="d-flex flex-stack flex-wrap gap-4">

                            <div class="d-flex align-items-center fw-bold pe-0">

                                <div class="d-flex align-items-center fw-bold gap-3">

                                    <div class="text-color-secondary fs-7 me-2 text-nowrap">Select Sales</div>


                                    <Select
                                        options={options}
                                        value={selectedOption}
                                        onChange={setSelectedOption}
                                        placeholder="Select an option"
                                        className="w-120px "
                                    />

                                </div>

                            </div>


                            <div class="d-flex align-items-center fw-bold pe-0">

                                {/* <div class="text-muted fs-7 me-2">Status</div>  */}


                                <button id="kt_td_picker_button" class="btn btn-flex flex-center btn-light gap-3">
                                    <span className="text-color-secondary">Select Date</span>

                                    <div className="w-120px">
                                        <DatePicker />
                                    </div>
                                </button>

                            </div>

                        </div>

                    </div>

                </div>


                <div class="card-body">

                    <div class="table-responsive">
                        <table class="table align-middle table-row-dashed fs-6 gy-3" id="sales_purchase">
                            <thead>
                                <tr class="text-start text-color-secondary fw-bold fs-8 text-uppercase gs-0">
                                    <th class="min-w-150px text-color-secondary">BOOKING ID</th>
                                    <th class="min-w-150px text-color-secondary">USER</th>
                                    <th class="min-w-200px text-color-secondary">EMAIL</th>
                                    <th class="min-w-150px text-color-secondary">COURSE CATEGORY</th>
                                    <th class="min-w-200px text-color-secondary">COURSE NAME</th>
                                    <th class="min-w-150px text-color-secondary">COURSE TYPE</th>
                                    <th class="min-w-100px text-color-secondary">AMOUNT PAID</th>
                                    <th class="min-w-150px text-color-secondary">BOOKING DATE</th>
                                </tr>
                            </thead>
                            <tbody class="fw-medium fs-7 text-color">
                                <tr>
                                    <td>PYW12345</td>
                                    <td>Amit Singh</td>
                                    <td>amit@example.com</td>
                                    <td>Investor</td>
                                    <td>Money IQ Class</td>
                                    <td>Live Session</td>
                                    <td>₹9,420</td>
                                    <td>Jan 20, 2025</td>
                                </tr>
                                <tr>
                                    <td>PYW12346</td>
                                    <td>Saurav Tiwari</td>
                                    <td>saurav@example.com</td>
                                    <td>CFP Training</td>
                                    <td>CFP Training</td>
                                    <td>Recorded</td>
                                    <td>₹8,420</td>
                                    <td>Jan 20, 2025</td>
                                </tr>
                                <tr>
                                    <td>PYW12347</td>
                                    <td>Krishna Mishra</td>
                                    <td>krishna@example.com</td>
                                    <td>Financial Advisor</td>
                                    <td>Business Growth Mentoring</td>
                                    <td>Live Session</td>
                                    <td>₹18,640</td>
                                    <td>Jan 20, 2025</td>
                                </tr>
                                <tr>
                                    <td>PYW12348</td>
                                    <td>Nitesh Maurya</td>
                                    <td>nitesh@example.com</td>
                                    <td>Investor</td>
                                    <td>MoneyWise Blueprint</td>
                                    <td>Live Session</td>
                                    <td>₹26,420</td>
                                    <td>Jan 20, 2025</td>
                                </tr>
                                <tr>
                                    <td>PYW12349</td>
                                    <td>Ankit Verma</td>
                                    <td>ankit@example.com</td>
                                    <td>Investor</td>
                                    <td>Money IQ Class</td>
                                    <td>Recorded</td>
                                    <td>₹9,420</td>
                                    <td>Jan 20, 2025</td>
                                </tr>
                                <tr>
                                    <td>PYW12350</td>
                                    <td>Ankit Verma</td>
                                    <td>ankit@example.com</td>
                                    <td>CFP Training</td>
                                    <td>CFP Training</td>
                                    <td>Live Session</td>
                                    <td>₹9,420</td>
                                    <td>Jan 20, 2025</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
};

export default Dashboard