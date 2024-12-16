import { useState } from "react";
import "./styles/App.css";
import PersonalDetailsForm from "./components/PersonalDetailsForm";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    adress: "",
  });

  const handlePersonalDetailsChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.id]: e.target.value });
  };

  console.log(personalDetails);

  return (
    <div>
      <h1>CV Builder</h1>
      <PersonalDetailsForm
        personalDetails={personalDetails}
        handleChange={handlePersonalDetailsChange}
      />
    </div>
  );
}

export default App;
