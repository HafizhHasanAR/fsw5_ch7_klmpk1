import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import {Col, Card, Button} from "react-bootstrap";

const CardCarComponent = ({car}) => {
    const {image, manufacture, model, rentPerDay, capacity, description, transmission, year} = car;

    return (
        <>
            <Col>
                <Card>
                    <Card.Img src={image} alt="" style={{height: "190px", objectFit: "cover"}} />
                    <Card.Body style={{fontSize: "14px"}}>
                        <Card.Title>
                            {manufacture} {model}
                        </Card.Title>
                        <Card.Text className="fw-bold">Rp. {rentPerDay} / hari</Card.Text>
                        <Card.Text style={{height: "60px", overflow: "hidden"}}>{description}</Card.Text>
                        <Card.Text>
                            <i className="bi bi-people me-2"></i>
                            {capacity} Orang
                        </Card.Text>
                        <Card.Text>
                            <i className="bi bi-gear me-2"></i>
                            {transmission}
                        </Card.Text>
                        <Card.Text>
                            <i className="bi bi-calendar4 me-2"></i>
                            {year}
                        </Card.Text>
                        <Button href="/cars" className="bg-button w-100 border-0">
                            Pilih Mobil
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CardCarComponent;
