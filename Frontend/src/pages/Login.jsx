import "../public/css/login.css";
import Navbar from "../components/Navbar";
import FormLogin from "../components/FormLogin";

function Login() {
    return (
        <div className="App bg-aliceblue h-100">
            <Navbar />
            <FormLogin />
        </div>
    );
}

export default Login;
