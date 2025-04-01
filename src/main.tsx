import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import WelcomePage from "./Components/Pages/Welcome/WelcomePage.tsx";
// ? For some testing data:boolean 
const data: boolean = true;
createRoot(document.getElementById("root")!).render(
  <StrictMode>{data ? <App /> : <WelcomePage />}</StrictMode>
);
