import React, { useEffect, useRef } from "react";
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DateRange = () => {
    const datePickerRef = useRef(null);

    useEffect(() => {
        Flatpickr(datePickerRef.current, {
            mode: "range",  // Enable date range selection
            dateFormat: "Y-m-d",  // Format the date
        });
    }, []);

    return <input ref={datePickerRef} className="form-control" placeholder="Select Date Range" />;
};

export default DateRange;
