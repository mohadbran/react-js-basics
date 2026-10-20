import FileComp from "./FileComp.jsx";

function App() {

  const element = <h1>Hello React! this is a JSX element from variable</h1>;

  const a = 10;
  const b = 20;

  const name = "Mohammedbrhan";

  const course = "I am learning the Basics of React.js.";

  return (
    <>
    Course: {course}
    <div>
      <h1>Hello, React!</h1>
      <p>My name is {name}.</p>
      <p>I am learning React.js.</p>
    </div>

 { "asfads: " + 45}

    <hr />
    <div className="container" id="asdas">
      A container div
      </div>
      <p>Total: {a + b}</p>
      <h1>Welcome to My React Course</h1>
      <p>I am building my first React application.</p>
      <b>My name is Mohammedbrhan</b>
      {element}

      <Comp/>

      <br />

      <FileComp/>
    </>
  );
}

function Comp() {
  return (
    <i>This JSX elment is from another component</i>
  );
}

export default App;
