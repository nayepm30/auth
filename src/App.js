import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Private from "./pages/Private";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route 
          path="/"
          element={
            <PrivateRoute>
              <Private />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
