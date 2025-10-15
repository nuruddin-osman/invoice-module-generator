import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickers = ({ value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Convert incoming "DD-MM-YYYY" to Date object
  useEffect(() => {
    if (value) {
      const [day, month, year] = value.split("-");
      setSelectedDate(new Date(`${year}-${month}-${day}`));
    }
  }, [value]);

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => {
        const formatted = date
          ? date.toLocaleDateString("en-GB") // DD/MM/YYYY format
          : "";
        console.log(formatted);
        setSelectedDate(date);
        onChange(formatted.replace(/\//g, "-"));
      }}
      dateFormat="dd-MM-yyyy"
      placeholderText="DD-MM-YYYY"
      className="inputCommonClass"
      showYearDropdown
      scrollableYearDropdown
      minDate={new Date(1950, 0, 1)}
      maxDate={new Date(2050, 11, 31)}
    />
  );
};

export default DatePickers;
