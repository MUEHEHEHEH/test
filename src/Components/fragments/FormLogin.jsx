import Inputform from "../elements/input";
import Button from "../elements/button/button";



const FormLogin = () =>{
    const handleLogin = () => {
        console.log("login");
    }

    return(
        <form onSubmit={handleLogin}>
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
            <Button variant = "bg-blue-600 w-full" type="submit">
                Login
            </Button>
      </form>
    )
};

export default FormLogin;