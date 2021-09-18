import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import ClassNumberTopic from "./components/ClassNumberTopic";
import CounterRedux from "./components/CounterRedux";
import FormStore from "./components/FormStore";
import TestComp from "./components/TestComp";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";

function App() {
  return (
    <>
      <ClassNumberTopic classNo="17" topic="Redux Example + Saga Intro" />
      <br />
      <br />
      <CounterRedux />
      <br />
      <br />
      <hr />
      <TestComp />
      <hr />
      {/* <FormStore /> */}
      {/* <AddTodoForm />
      <TodoList />
      <TotalCompleteItems /> */}
    </>
  );
}

export default App;
