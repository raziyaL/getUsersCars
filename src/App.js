import './App.css';
import UserPage from "./pages/UserPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserId from "./components/UserId";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<UserPage/>}/>
          <Route path='users/:id' element={<UserId/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
