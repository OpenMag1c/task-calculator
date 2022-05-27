import React from "react";
import { Wrapper, ControlPanel } from "./components";
import KeyPad from "@/containers/KeyPad";
import History from "@/containers/History";
import useCalculation from "@/pages/Home/useCalculation";
import Display from "@/components/Display";

function Home() {
  const {
    example,
    setExample,
    history,
    updateHistory,
    onPressKey,
  } = useCalculation();

  return (
    <Wrapper>
      <ControlPanel>
        <Display text={example} />
        <KeyPad onPressKey={onPressKey} />
      </ControlPanel>
      <History
        history={history}
        setExample={setExample}
        updateHistory={updateHistory}
      />
    </Wrapper>
  );
}

export default Home;
