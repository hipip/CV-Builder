import FormItem from "./FormItem";

export default function PersonalDetailsForm({ personalDetails, handleChange }) {
  return (
    <div>
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
    </div>
  );
}
