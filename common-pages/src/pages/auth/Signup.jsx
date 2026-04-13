import AuthForm from "../../components/ui/AuthForm";

const Signup = () => {
  const fields = [
    { type: "text", placeholder: "Full Name" },
    { type: "email", placeholder: "example@company.com" },
    { type: "password", placeholder: "Password" },
    { type: "password", placeholder: "Confirm Password" }
  ];

  return (
    <AuthForm
      fields={fields}
      buttonText="Sign up"
      mode="signup"
    />
  );
};

export default Signup;