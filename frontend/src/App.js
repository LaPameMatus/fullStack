import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/navegacion/Navbar";
import Inicio from "./component/paginas/Inicio";
import Productos from "./component/paginas/Productos";
import Contactos from "./component/paginas/Contactos";
import Login from "./component/paginas/Login";
import Register from "./component/paginas/Register";

function App() {
  return (
    <div className="fondo">
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/frontend/src/component/paginas/Inicio.js"
            exact
            component={Inicio}
          />
          <Route
            path="/frontend/src/component/paginas/Productos.js"
            exact
            component={Productos}
          />
          <Route
            path="/frontend/src/component/paginas/Contactos.js"
            exact
            component={Contactos}
          />
          <Route
            path="/frontend/src/component/paginas/Login.js"
            exact
            component={Login}
          />
          <Route
            path="/frontend/src/component/paginas/Register.jsx"
            exact
            component={Register}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
