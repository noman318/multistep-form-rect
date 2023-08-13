import React from "react";
import FormWrapper from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  pincode: string;
};
type AddresFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

const AddressForm = ({
  street,
  city,
  state,
  pincode,
  updateFields,
}: AddresFormProps) => {
  return (
    <FormWrapper title="Address Details">
      <label>Street</label>
      <input
        type="text"
        required
        autoFocus
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        type="text"
        required
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>State</label>
      <input
        type="text"
        required
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label>Pincode</label>
      <input
        type="text"
        required
        value={pincode}
        onChange={(e) => updateFields({ pincode: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AddressForm;
