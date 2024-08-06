import styled from "styled-components";

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
  /*
    form
        label
        input

        label
        input

        button

    */
  return (
    <Form>
      <h2>Login</h2>
      <FormRow>
        <Label htmlFor="username">Username:</Label>
        <Input id="username" type="email" placeholder="E-mail adresiniz" />
      </FormRow>
      <FormRow>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Şifreniz" />
      </FormRow>
      <FormRow>
        <Button type="submit">Log In</Button>
      </FormRow>
    </Form>
  );
}
