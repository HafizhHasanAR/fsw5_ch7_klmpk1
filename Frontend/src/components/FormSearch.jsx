import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import Swal from 'sweetalert2';
import {Container, Row, Col, Form, Button} from "react-bootstrap";

import Car from "./CardCar";
import {getAllCars} from "../redux/actions/carsActions";
import HeaderCar from "../public/img/HeaderCar.png";

const FormSearchComponent = (props) => {
    const dispatch = useDispatch();
    const {cars, error} = useSelector((state) => state.cars);

    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    const [driver, setDriver] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [jam, setJam] = useState("");
    const [penumpang, setPenumpang] = useState("");
    const dateTime = tanggal + " " + jam;

    function getDateTimeNow() {
        var today = new Date();
        var date = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
        var time = String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + String(today.getSeconds()).padStart(2, "0");
        var dateNow = date + " " + time + "";
        return dateNow;
    }

    const filterCar = async () => {
        if (driver === undefined || driver === "") {
            return Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Please select driver type', 
                showConfirmButton: false,
                timer: 1000
            });
        } else if (dateTime < getDateTimeNow()) {
            return Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Please select a date and time greater than now',
                showConfirmButton: false,
                timer: 1000
            });
        } else if (penumpang === undefined || penumpang === "") {
            return dispatch(getAllCars({tanggal, jam, penumpang:1}));
        } else {
            return dispatch(getAllCars({tanggal, jam, penumpang}));
        }
    };

    return (
        <>
            <div className="bg-aliceblue">
                <Container className="pt-5">
                    <Row>
                        <Col lg className="my-auto">
                            <h1 className="h1 fw-bold me-4">Sewa & Rental Mobil Terbaik di kawasan Karawang</h1>
                            <p className="w-75">
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                        </Col>
                        <Col lg>
                            <img src={HeaderCar} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="cars-box-search p-4 row-cols-xl-auto mx-auto mb-4">
                    <Col xxl className="p-2 mx-auto inputDriver">
                        <label htmlFor="TipeDriver" className="pb-2" style={{fontSize: "13.5px"}}>
                            Tipe Driver
                        </label>
                        <Form.Select value={driver} onChange={(e) => setDriver(e.target.value)} required>
                            <option value="">Pilih Tipe Driver</option>
                            <option value="yes">Dengan Supir</option>
                            <option value="no">Tanpa Supir(Lepas Kunci)</option>
                        </Form.Select>
                    </Col>
                    <Col xxl className="p-2 mx-auto inputDate">
                        <label htmlFor="Tanggal" className="pb-2" style={{fontSize: "13.5px"}}>
                            Tanggal
                        </label>
                        <Form.Control type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} required />
                    </Col>
                    <Col xxl className="p-2 mx-auto inputTime">
                        <label htmlFor="Time" className="pb-2" style={{fontSize: "13.5px"}}>
                            Waktu Jemput/Ambil
                        </label>
                        <Form.Select value={jam} onChange={(e) => setJam(e.target.value)} required>
                            <option value="">Pilih Waktu</option>
                            <option value="00:00:00">00.00 WIB</option>
                            <option value="01:00:00">01.00 WIB</option>
                            <option value="02:00:00">02.00 WIB</option>
                            <option value="03:00:00">03.00 WIB</option>
                            <option value="04:00:00">04.00 WIB</option>
                            <option value="05:00:00">05.00 WIB</option>
                            <option value="06:00:00">06.00 WIB</option>
                            <option value="07:00:00">07.00 WIB</option>
                            <option value="08:00:00">08.00 WIB</option>
                            <option value="09:00:00">09.00 WIB</option>
                            <option value="10:00:00">10.00 WIB</option>
                            <option value="11:00:00">11.00 WIB</option>
                            <option value="12:00:00">12.00 WIB</option>
                            <option value="13:00:00">13.00 WIB</option>
                            <option value="14:00:00">14.00 WIB</option>
                            <option value="15:00:00">15.00 WIB</option>
                            <option value="16:00:00">16.00 WIB</option>
                            <option value="17:00:00">17.00 WIB</option>
                            <option value="18:00:00">18.00 WIB</option>
                            <option value="19:00:00">19.00 WIB</option>
                            <option value="20:00:00">20.00 WIB</option>
                            <option value="21:00:00">21.00 WIB</option>
                            <option value="22:00:00">22.00 WIB</option>
                            <option value="23:00:00">23.00 WIB</option>
                        </Form.Select>
                    </Col>
                    <Col xxl className="p-2 mx-auto inputPassanger" style={{minWidth: "200px"}}>
                        <label htmlFor="Tanggal" className="pb-2" style={{fontSize: "13.5px"}}>
                            Jumlah Penumpang (optional)
                        </label>
                        <Form.Control type="number" placeholder="Jumlah Penumpang" value={penumpang} onChange={(e) => setPenumpang(e.target.value)} />
                    </Col>
                    <Col xl className="p-2 d-inline h-100" style={{alignSelf: "flex-end"}}>
                        <Button onClick={() => filterCar()} className="bg-button border-0" type="button">
                            Cari Mobil
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {cars.length === 0 ? (
                        <></>
                    ) : (
                        cars.data.map((car) => (
                            <Col key={car.id} sm={6} md={4} className="my-2">
                                <Car car={car} />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </>
    );
};

export default FormSearchComponent;
