import React, { useEffect, useRef } from "react";
import Flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DatePicker = () => {
    const datePickerRef = useRef(null);

    useEffect(() => {
        Flatpickr(datePickerRef.current, { dateFormat: "Y-m-d" });
    }, []);

    return <input ref={datePickerRef} className="form-control form-control-solid" placeholder="Select a Date"/>;
};

export default DatePicker;
