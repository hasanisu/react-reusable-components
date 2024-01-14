import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <h1>Main Content</h1>
        <button className="btn btn-primary">This is a Button</button>
      </div>
    </Container>
  );
}

export default App;
