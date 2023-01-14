import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.components";
const Shop = () => {
  return <h1>Im shop page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Authentication />} />

        </Route>
    </Routes>
  );
}

export default App;
