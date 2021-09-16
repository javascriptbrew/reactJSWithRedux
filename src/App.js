import "./App.css";
import ClassNumberTopic from "./components/ClassNumberTopic";
import CounterRedux from "./components/CounterRedux";
import TestComp from "./components/TestComp";

function App() {
  return (
    <>
      <ClassNumberTopic classNo="16" topic="Redux Setup" />
      <br />
      <br />
      <CounterRedux />

      <br />
      <br />
      <hr />
      <TestComp />
    </>
  );
}

export default App;
