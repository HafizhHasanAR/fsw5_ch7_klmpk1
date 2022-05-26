import "../public/css/style.css";
import "../public/css/login.css";

import Navbar from "../components/Navbar";
import FormRegister from "../components/FormRegister";

function Register() {
    return (
        <div className="App bg-aliceblue h-100">
            <Navbar />
            <FormRegister />
        </div>
    );
}

export default Register;
