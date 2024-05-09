
import { Routes, Route } from "react-router-dom";
import {AuthLayout, SignUpForm, SigninForm, RootLayout} from "./index";
const App = () => {
  return (
    <main className="flex h-screen">
       <Routes>
        {/* Private Route */}
        <Route element={<AuthLayout/>}>
          <Route path="/sign-in" element={<SigninForm/>}/>
          <Route path="/sign-up" element={<SignUpForm/>}/>
        </Route>

        <Route element={<RootLayout/>}>
          <Route index element/>
        </Route>
        {/* Public Route */}
       </Routes>
    </main>
  )
};

export default App;
