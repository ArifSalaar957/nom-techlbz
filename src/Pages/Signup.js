import React, { useState } from "react";
import styled from "styled-components";
import BlackNavbar from "../components/BlackNavbar";
import { Link, useNavigate } from "react-router-dom";
import BlackFooter from "../components/BlackFooter";
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../firebase/Config";

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonDisable(true);

    if (
      !values.firstName ||
      !values.lastName ||
      !values.email ||
      !values.password ||
      !values.confirmPassword
    ) {
      setError("Please fill in all fields.");
      setButtonDisable(false);
      return;
    }

    if (values.password !== values.confirmPassword) {
      setError("Passwords do not match.");
      setButtonDisable(false);
      return;
    }

    setError("");

    createUserWithEmailAndPassword(auth, values.email, values.password)
    .then(async (res) => {
        setButtonDisable(false);
        const user = res.user;
        console.log(user, '.....');
        await updateProfile(user, {
          displayName: `${values.firstName} ${values.lastName}`,
        });
        navigate("/about")
      }
    ).catch((error) => {
      setButtonDisable(false);
      console.log(error);
    });
  };

  return (
    <>
      {/* Navbar */}
      <BlackNavbar />

      {/* Signup Section */}
      <Container className="container">
        <WrapperRow className="row">
          <ImageColumn className="col-md-6">
            <Image
              src={process.env.PUBLIC_URL + "/images/Rectangle 3824 (1).png"}
            />
          </ImageColumn>
          <SignupColumn className="col-md-6">
            <SignupText>Sign Up</SignupText>
            <WelcomeText>Join us! We welcome you to our platform.</WelcomeText>
            <NameField className="row">
              <FirstName className="col-md-6">
                <FirstNameLabel>First Name</FirstNameLabel>
                <FirstNameField
                  type="text"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      firstName: event.target.value,
                    }))
                  }
                />
              </FirstName>
              <LastName className="col-md-6">
                <LastNameLabel>Last Name</LastNameLabel>
                <LastNameField
                  type="text"
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      lastName: event.target.value,
                    }))
                  }
                />
              </LastName>
            </NameField>
            <EmailLabel>Email</EmailLabel>
            <EmailField
              type="email"
              placeholder="Ex. xyz@company.com"
              value={values.email}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            />
            <PasswordLabel>Password</PasswordLabel>
            <PasswordField
              type="password"
              placeholder="*****"
              value={values.password}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, password: event.target.value }))
              }
            />
            <ConfirmPasswordLabel>Confirm Password</ConfirmPasswordLabel>
            <ConfirmPasswordField
              type="password"
              placeholder="*****"
              value={values.confirmPassword}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  confirmPassword: event.target.value,
                }))
              }
            />
            <ErrorText className="pt-4 text-center">{error}</ErrorText>
            <SignupButton
              type="submit"
              onClick={handleSubmit}
              disabled={buttonDisable}
            >
              Sign Up
            </SignupButton>

            <GoToLogin>
              <HaveAccount>Already have an account?</HaveAccount>
              <Link to="/Login" style={{ textDecoration: "none" }}>
                <Text>Login</Text>
              </Link>
            </GoToLogin>
          </SignupColumn>
        </WrapperRow>
      </Container>

      {/* Footer */}
      <BlackFooter />
    </>
  );
};

const Container = styled.div``;
const FirstName = styled.div``;
const LastName = styled.div``;
const ImageColumn = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const GoToLogin = styled.div`
  text-align: center;
  padding: 15px 0px;
`;
const SignupButton = styled.button`
  background: #1d1d22;
  border-radius: 5px;
  width: 100%;
  margin-top: 40px;
  height: 66px;
  font-family: "Poppins";
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;
const SignupColumn = styled.div`
  padding: 40px;
  align-self: center;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const SignupText = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  text-decoration-line: underline;
  color: #000000;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 17px;
  }
`;
const Text = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  padding: 0px 3px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;
const EmailField = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  padding: 0px 20px;
  margin-top: 10px;
  background: rgba(239, 239, 239, 0.5);
  border-radius: 5px;
`;
const FirstNameField = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  padding: 0px 20px;
  margin-top: 10px;
  background: rgba(239, 239, 239, 0.5);
  border-radius: 5px;
`;
const LastNameField = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  padding: 0px 20px;
  margin-top: 10px;
  background: rgba(239, 239, 239, 0.5);
  border-radius: 5px;
`;
const PasswordField = styled.input`
  width: 100%;
  height: 50px;
`;

const ConfirmPasswordField = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  padding: 0px 20px;
  margin-top: 10px;
  background: rgba(239, 239, 239, 0.5);
  border-radius: 5px;
`;
const EmailLabel = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const FirstNameLabel = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const LastNameLabel = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const PasswordLabel = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const ConfirmPasswordLabel = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const NameField = styled.div`
  margin-top: 10px;
`;
const WelcomeText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 14px;
  }
`;
const WrapperRow = styled.div`
  margin: 0px;
`;
const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;
const HaveAccount = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default Signup;
