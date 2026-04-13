import AuthForm from "../../components/ui/AuthForm";

const Login = () => {
  const fields = [
    { type: "email", placeholder: "Email" },
    { type: "password", placeholder: "Password" }
  ];

  return (
    <AuthForm 
      title="Login"
      fields={fields}
      buttonText="Login"
    />
  );
};

export default Login;