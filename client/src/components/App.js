// NPM Modules
import React from "react";
// Components
import Root from "../utils/Root";
import DisplayResults from "./DisplayResults";
import FormInput from "./FormInput";

const App = () => {
  return (
    <Root>
      <div className="container">
        <h1 className="text-center">Restaurant Search</h1>
        <FormInput />
        <DisplayResults />
      </div>
    </Root>
  );
};

export default App;
