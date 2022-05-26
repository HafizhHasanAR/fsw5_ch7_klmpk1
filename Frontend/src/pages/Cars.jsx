import "../public/css/style.css";
import Navbar from "../components/Navbar";
import FormSearch from "../components/FormSearch";
import Footer from "../components/Footer";

function Cars() {
    return (
        <div className="App">
            <Navbar />
            <FormSearch />
            <Footer />
        </div>
    );
}

export default Cars;
