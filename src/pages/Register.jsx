import AuthLayouts from "../Components/layouts/AuthLayouts";
import FormRegister from "../Components/fragments/FormRegister";


const RegisterPage = () => {
    return(
        <AuthLayouts title ="Register" type = "register">
            <FormRegister></FormRegister>
        </AuthLayouts>
    );
};

export default RegisterPage;