import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ContactUs from "./pages/ContactUs";
// import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
};

export default App;

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Switch>
//           <Route exact path='/' component={Home}></Route>
//           <Route path='/contactUs' component={ContactUs}></Route>
//         </Switch>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
