import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UsersLists";
import MainLayout from './components/layout/MainLayout'
import './index.css'
const App = () => (
  <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path="/" element={<UserList />} />
        </Route>
      </Routes>
  </Router>
)

export default App
