import "./App.css";

function App() {
  return (
    <>
      <h1>Automatic deployment</h1>
      <ul style={{ listStyle: "none" }}>
        <li>
          Queremos que cada vez que se haga un merge a la rama principal de este
          ejercicio, se dispare un flujo de build y despliegue.
        </li>
        <li>Usar Github Actions para esto.</li>
        <li style={{ fontSize: "10px" }}>
          A green check should appear after commit
        </li>
      </ul>
    </>
  );
}

export default App;
