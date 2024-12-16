import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormItem from "./FormItem";
import { useState } from "react";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function PersonalDetailsForm({ personalDetails, handleChange }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <button className="section-btn" onClick={toggleIsOpen}>
        <h2>Personal Details</h2>
        <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} />
      </button>
      {isOpen && (
        <>
          <FormItem
            htmlFor="fullName"
            label="Full Name"
            value={personalDetails.fullName}
            onChange={handleChange}
          />

          <FormItem
            htmlFor="email"
            label="Email"
            value={personalDetails.email}
            onChange={handleChange}
          />
          <FormItem
            htmlFor="phoneNumber"
            label="Phone Number"
            value={personalDetails.phoneNumber}
            onChange={handleChange}
          />
          <FormItem
            htmlFor="address"
            label="Address"
            value={personalDetails.address}
            onChange={handleChange}
          />
        </>
      )}
    </section>
  );
}
