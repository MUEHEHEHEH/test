import AuthLayouts from "../Components/layouts/AuthLayouts";
import FormLogin from "../Components/fragments/FormLogin";

const LoginPage = () => {
    return(
        <AuthLayouts title ="login" type = "login">
            <FormLogin/>
        </AuthLayouts>
    );
};

export default LoginPage;