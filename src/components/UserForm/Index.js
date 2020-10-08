import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Title, Error } from "./styles";
import { Logo2 } from "../Logo2";
import { SubmitButton } from "../SubmitButton";

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Logo2 />

      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input disabled={disabled} placeholder="Contraseña" type="password" {...password} />

        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
