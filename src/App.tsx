import React, { FormEvent, useState } from "react";
import useMultistepForm from "./hooks/useMultistepForm";
import UserForm from "./components/UserForm";
import AddressForm from "./components/AddressForm";
import AccountForm from "./components/AccountForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  userName: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  pincode: "",
  userName: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    previous,
    next,
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ]);
  const handleSubmit = (e: FormEvent) => {
    console.log("data", data);
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successfully created account");
  };
  return (
    <>
      <h1>Multi step Form</h1>

      <div
        className="App"
        style={{
          position: "relative",
          border: "1px solid black",
          background: "white",
          padding: "2rem",
          margin: "1rem",
          borderRadius: "0.5rem",
          fontFamily: "Arial",
          maxWidth: "max-content",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
            {currentStepIndex + 1}/{steps.length}
          </div>
          {step}
          <div
            style={{
              display: "flex",
              marginTop: "1rem",
              justifyContent: "flex-end",
              gap: "0.5rem",
            }}
          >
            {isFirstStep && (
              <button type="button" onClick={previous}>
                Back
              </button>
            )}
            <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
