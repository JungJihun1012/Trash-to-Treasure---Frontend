import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { registerUser } from "../../_actions/user_actions";

const Register: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confrimPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (name === "email") setEmail(value);
        else if (name === "name") setName(value);
        else if (name === "password") setPassword(value);
        else if (name === "confirmPassword") setConfirmPassword(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(password !== confrimPassword) {
            return alert("비밀번호와 비밀번호 확인이 같아야 합니다.");
        };

        const body = {
            email: email,
            password: password,
            name: name,
        };

        dispatch(registerUser(body)).payload.then((res: any) => {
            if (res.payload.success) {
                navigate("/login");
            }else {
                alert("회원가입에 실패하셨습니다.")
            };
        });
    };
    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <EmailLabel>Email</EmailLabel>
                <EmailInput 
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChnage}
                />
                <NameLabel>Name</NameLabel>
                <NameInput 
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChnage}
                />
                <PasswordLabel>Password</PasswordLabel>
                <PasswordInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChnage}
                />
                <ConPassLabel>Confirm Password</ConPassLabel>
                <ConPassInput 
                    type="password"
                    name="confirmPassword"
                    value={confrimPassword}
                    onChange={handleChnage}
                />

                <br />
                <button>회원가입</button>
            </form>
        </Container>
    )
}

export const Container = styled.div``;

export const EmailLabel = styled.label``;
export const EmailInput = styled.input``;
export const NameLabel = styled.label``;
export const NameInput = styled.input``;
export const PasswordLabel = styled.label``;
export const PasswordInput = styled.input``;
export const ConPassLabel = styled.label``;
export const ConPassInput = styled.input``;

export default Register;