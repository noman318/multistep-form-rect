import React from "react";
import FormWrapper from "./FormWrapper";

type AccountData = {
  userName: string;
  password: string;
};
type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};
const AccountForm = ({
  userName,
  password,
  updateFields,
}: AccountFormProps) => {
  return (
    <FormWrapper title="Account Info">
      <label>User Name</label>
      <input
        type="text"
        required
        autoFocus
        value={userName}
        onChange={(e) => updateFields({ userName: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
