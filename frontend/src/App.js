import { Route, Routes } from "react-router-dom";
import Header from "./pages/header/Header";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
<>
<Header></Header>
<Routes>
  <Route path="/login" element={<Login></Login>}></Route>
  <Route path="/register" element={<Signup></Signup>}></Route>
  <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
</Routes>
</>
  );
}

export default App;


// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Header from "./pages/header/Header";
// import Login from "./pages/auth/login/Login";
// import Signup from "./pages/auth/signup/Signup";
// import Dashboard from "./pages/dashboard/Dashboard";
// // import Home from "./pages/home/Home"; // Assuming you have a Home component
// // import NotFound from "./pages/notfound/NotFound"; // Assuming you have a NotFound component

// function App() {
//   return (
//     <Router>
//       <>
//         <Header />
//         <Routes>
//           {/* <Route path="/" element={<Home />} /> */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Signup />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           {/* <Route path="*" element={<NotFound />} /> */}
//         </Routes>
//       </>
//     </Router>
//   );
// }

// export default App;
