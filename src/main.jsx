import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import App from "./App";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/bababuy" element={<App />} />
//       <Route path='/register' element={ <Redirect to="./Pages/RegisterPage" /> }/>
//     </Switch>
//   </BrowserRouter>,
//   rootElement
// );

{/* <React.StrictMode><App /></React.StrictMode> */}