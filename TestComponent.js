import React from "react";

function TestComponent() {
  const triggerError = () => {
    throw new Error("Sentry Test Error");
  };

  return <button onClick={triggerError}>Trigger Error</button>;
}

export default TestComponent;
