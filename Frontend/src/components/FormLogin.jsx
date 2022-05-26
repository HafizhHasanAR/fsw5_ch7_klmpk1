import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useGoogleLogin} from "@react-oauth/google";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import HeaderCar from "../public/img/HeaderCar.png";
import {Navigate} from "react-router-dom";
import Swal from 'sweetalert2';

import {loginViaForm, loginWithGoogle} from "../redux/actions/authActions";

const LoginFormComponent = () => {
    const dispatch = useDispatch();
    const {isAuthenticated, error} = useSelector((state) => state.auth);

    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === "") {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Please enter your email',
                showConfirmButton: false,
                timer: 1000
            });
        }
        if (password === "") {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Password cannot be empty',
                showConfirmButton: false,
                timer: 1000
            });
        }
        if (email !== "" && password !== "") {
            dispatch(loginViaForm({email, password}));
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            dispatch(loginWithGoogle(tokenResponse.access_token));
        },
        onError: (error) => {
            alert(error);
        },
    });

    return (
        <>
            {!isAuthenticated ? (
                <div className="bg-aliceblue">
                    <Container className="pt-5">
                        <Row>
                            <Col lg={5} className="my-auto form-login">
                                <Form className="mt-4" onSubmit={handleSubmit}>
                                    <h3>Log in</h3>
                                    <Form.Group className="my-3">
                                        <label className="labelLogin">Email</label>
                                        <Form.Control type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </Form.Group>
                                    <Form.Group className="my-3">
                                        <label className="labelLogin">Password</label>
                                        <Form.Control type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </Form.Group>
                                    <Button type="submit" className="col-12 border-0 signIn">
                                        Sign in
                                    </Button>
                                    <p className="sign-up text-right">
                                        Don't have an Account? <a href="/register">Sign Up?</a>
                                    </p>
                                </Form>
                                <Button type="button" onClick={() => googleLogin()} className="col-12 border-0 signGoogle">
                                    <i className="bi bi-google me-2"></i>Sign in with Google
                                </Button>
                            </Col>
                            <Col lg={6}>
                                <img src={HeaderCar} className="img-fluid imgLogin" alt="" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            ) : (
                <Navigate to={`/`} />
            )}
        </>
    );
};

export default LoginFormComponent;
