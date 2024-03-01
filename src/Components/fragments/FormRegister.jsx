import Inputform from "../elements/input";
import Button from "../elements/button/button";
import { Link } from "react-router-dom";


const FormRegister = () =>{
    return(
        <form action="">
            <Inputform 
                label = "Fullname" 
                type = "text" 
                placeholder = "nameee" 
                name = "fullname">
            </Inputform>

            <Inputform 
                label = "Email" 
                type = "email" 
                placeholder = "example@gmail.com" 
                name = "email">
            </Inputform>

            <Inputform 
                label = "Password" 
                type = "password" 
                placeholder = "*******" 
                name = "password">
            </Inputform>

            <Inputform 
                label = "Confirm Password" 
                type = "password" 
                placeholder = "*******" 
                name = "confirmPassword">
            </Inputform>
            <Button variant = "bg-blue-600 w-full">Register</Button>
      </form>
    )
};

export default FormRegister;