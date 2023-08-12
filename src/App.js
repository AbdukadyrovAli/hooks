import React from "react";
import styled from "styled-components";
import useCounter from "./hooks/useCounter";
import useInput from "./hooks/useInput";
import useTimer from "./hooks/useTimer";
import { Button } from "./UI/Button";
import { Input } from "./UI/Input";

const App = () => {
  const counter = useCounter(0, { incrementLevel: 4, decrementLevel: 2 });
  const passwordInput = useInput("", (value) =>
    value.length >= 6 ? "" : "Invalid password"
  );

  const timer = useTimer(20);

  return (
    <Container>
      <Button onClick={counter.reset}>Reset</Button>
      <ContainerCounter>
        <Button onClick={counter.decrement}>Decrement</Button>
        <span>{counter.count}</span>
        <Button onClick={counter.increment}>Increment</Button>
      </ContainerCounter>

      <div>
        <Input
          type="password"
          placeholder="Enter password"
          {...passwordInput}
        />
        {passwordInput.error && <p>{passwordInput.error}</p>}
      </div>

      <Button onClick={timer.restart}>Restart Timer</Button>
      <ContainerTimer>
        <Button onClick={timer.start}>Start Timer</Button>
        <span>{timer.seconds} seconds</span>
        <Button onClick={timer.stop}>Stop Timer</Button>
      </ContainerTimer>
    </Container>
  );
};

export default App;

const ContainerTimer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ContainerCounter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
