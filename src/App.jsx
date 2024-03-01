import React from "react";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/Register";

function App() {

  return(
    <div className="flex justify-center min-h-screen items-center">
      {/* <LoginPage></LoginPage> */}
      <RegisterPage></RegisterPage>
    </div>
  );
  
}

export default App;
