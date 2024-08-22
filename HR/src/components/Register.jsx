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

export default function Register() {
  //hook
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    departman: "",
    terms: false,
  });
  const history = useHistory();

  //helper fn
  function changeHandler(event) {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function checkboxHandler(event) {
    let { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  }

  console.log(formData);

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
      <h2>Register</h2>
      <FormRow>
        <Label htmlFor="username">Username:</Label>
        <Input
          id="username"
          type="email"
          name="username"
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
          placeholder="Şifreniz"
          onChange={changeHandler}
          value={formData.password}
        />
      </FormRow>
      <FormRow>
        <h3>Departman Seç</h3>
        <div>
          <input
            type="radio"
            id="HR"
            name="departman"
            value="HR"
            checked={formData.departman === "HR"}
            onChange={changeHandler}
          />
          <label htmlFor="HR">HR</label>
        </div>
        <div>
          <input
            type="radio"
            id="Marketing"
            name="departman"
            value="Marketing"
            checked={formData.departman === "Marketing"}
            onChange={changeHandler}
          />
          <label htmlFor="Marketing">Marketing</label>
        </div>
        <div>
          <input
            type="radio"
            id="IT"
            name="departman"
            value="IT"
            checked={formData.departman === "IT"}
            onChange={changeHandler}
          />
          <label htmlFor="IT">IT</label>
        </div>
      </FormRow>
      <FormRow>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formData.terms}
          onChange={checkboxHandler}
        />
        <label htmlFor="terms">Anlaşma şartlarını kabul ediyorum.</label>
      </FormRow>
      <FormRow>
        <Button type="submit">Log In</Button>
      </FormRow>
    </Form>
  );
}
