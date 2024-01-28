import React, { PureComponent } from "react";
import { HomeStack } from "./src/Stacks";
import { MusicSheet } from "./src/Components";

export default class App extends PureComponent {
  render() {
    return (
      <>
        <HomeStack />
      </>
    );
  }
}
