import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PartialScheduleVerseSpanPage from "./pages/PartialScheduleVerseSpanPage/PartialScheduleVerseSpanPage";

function App() {
  console.log("loading app");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PartialScheduleVerseSpanPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
