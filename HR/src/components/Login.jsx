import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Form = styled.form`
  width: 50%;
  margin: auto;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid black;
  font-size: 20px;
`;

const FormRow = styled.div`
  margin: 2rem 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 22px;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 20px;
`;

const Button = styled.button`
  display: block;
  margin: auto;
  width: 200px;
  text-align: center;
  background: blue;
  color: white;
  padding: 0.5rem;
  border-radius: 100px;
`;

export default function Login() {
  //hook
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  //helper fn
  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function submitHandler(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        console.log(response.data);
        setFormData({
          username: "",
          password: "",
        });
        history.push("/users");
      })
      .catch((error) => console.log(error.message));
  }
  //template
  return (
    <Form onSubmit={submitHandler}>
      <h2>Login</h2>
      <FormRow>
        <Label htmlFor="username">Username:</Label>
        <Input
          id="username"
          type="email"
          name="username"
          data-cy="username-input"
          placeholder="E-mail adresiniz"
          onChange={changeHandler}
          value={formData.username.toUpperCase()}
        />
      </FormRow>
      <FormRow>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          data-cy="password-input"
          placeholder="Şifreniz"
          onChange={changeHandler}
          value={formData.password}
        />
      </FormRow>
      <FormRow>
        <Button type="submit" data-cy="submit-login-form">
          Log In
        </Button>
      </FormRow>
    </Form>
  );
}
