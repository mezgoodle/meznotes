import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header";
import NotesListPage from "./pages/NotesListPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<NotesListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
