import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { registerUser } from "../../_actions/user_actions";

const Register: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
        else if (name === "confirmPassword") setConfirmPassword(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        }

        const body = { email, password };

        dispatch(registerUser(body)).then((res: any) => {
            if (res.payload.success) {
                navigate("/login");
            } else {
                alert("Error");
            }
        });
    };

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <Title>회원가입</Title>
                <StyledInput
                    name="email"
                    type="email"
                    placeholder="아이디를 입력해주세요"
                    value={email}
                    onChange={handleChange}
                />
                <StyledInput
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={handleChange}
                />
                <StyledInput
                    name="confirmPassword"
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요"
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <SignupButton type="submit">회원가입</SignupButton>
            </FormContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #121212;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    background: #1e1e1e;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    width: 380px;
`;

const Title = styled.h2`
    margin-bottom: 40px;
    color: #ffffff;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
`;

const StyledInput = styled.input`
    padding: 14px;
    margin-bottom: 20px;
    border: 1px solid #444;
    border-radius: 8px;
    font-size: 16px;
    background-color: #333;
    color: #ffffff;
    transition: border-color 0.3s;

    &:focus {
        border-color: #007bff;
    }
`;

const SignupButton = styled.button`
    padding: 14px;
    background-color: #007bff;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`;


export default Register;
