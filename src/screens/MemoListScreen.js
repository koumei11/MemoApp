import React from "react";
import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";

class MemoListScreen extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MemoList />
        <CircleButton>+</CircleButton>
      </React.Fragment>
    );
  }
}

export default MemoListScreen;
