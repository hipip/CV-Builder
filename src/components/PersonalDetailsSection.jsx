import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionItem from "./SectionItem";
import { useState } from "react";
import {
  faCaretUp,
  faCaretDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function PersonalDetailsSection({
  personalDetails,
  handleChange,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="personal-details-section" className="section">
      <button className="section-btn" onClick={toggleIsOpen}>
        <FontAwesomeIcon icon={faUser} className="section-icon" />
        <h2 className="section-title">Personal Details</h2>
        <FontAwesomeIcon
          icon={isOpen ? faCaretUp : faCaretDown}
          className="caret-icon"
        />
      </button>
      {isOpen && (
        <div className="section-items">
          <SectionItem
            htmlFor="fullName"
            label="Full Name"
            placeHolder="Enter first & last name"
            value={personalDetails.fullName}
            onChange={handleChange}
          />

          <SectionItem
            htmlFor="email"
            label="Email"
            placeHolder="Enter mail"
            value={personalDetails.email}
            onChange={handleChange}
          />
          <SectionItem
            htmlFor="phoneNumber"
            label="Phone Number"
            placeHolder="Enter phone number"
            value={personalDetails.phoneNumber}
            onChange={handleChange}
          />
          <SectionItem
            htmlFor="address"
            label="Address"
            placeHolder="Enter address"
            value={personalDetails.address}
            onChange={handleChange}
          />
        </div>
      )}
    </section>
  );
}
