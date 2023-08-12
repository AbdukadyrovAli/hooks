import React from "react";
import { styled } from "styled-components";
// import useInput from "../hooks/useInput";

export const Input = ({ children, placeholder, type, ...passwordInput }) => {
  return (
    <InputCon type={type} placeholder={placeholder} {...passwordInput}>
      {children}
    </InputCon>
  );
};

const InputCon = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  margin-top: 30px;
  border-radius: 10px;
  border-color: red;
  cursor: pointer;
`;
