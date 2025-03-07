import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/Mainlayout";
import Home from "./components/home/Home";
// import Details from "./components/home/projects/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects/:name" element={<Details />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
