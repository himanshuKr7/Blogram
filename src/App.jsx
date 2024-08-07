import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import AllBlogs from "./pages/allBlogs/AllBlogs";
import BlogInfo from "./pages/blogInfo/BlogInfo";
import AdminLogin from "./pages/admin/adminLogin/AdminLogin";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import MyState from "./context/data/myState";
import { Toaster } from "react-hot-toast";
import CreateBlog from "./pages/admin/createBlog/createBlog";
function App() {
  return (
    <div>
      <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/bloginfo/:id" element={<BlogInfo />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createblog" element={<CreateBlog />} />
        </Routes>
        </Router>
        </MyState>
    </div>
  )
}

export default App


export const ProtectedRouteForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('admin'))
  if (admin?.user?.email === "testuser1@gmail.com") {
    return children
  }
  else {
    return <Navigate to={'/adminlogin'}/>
  }
}