import AuthForm from "../../components/ui/AuthForm";

const Forgot = () => {
  const fields = [
    { type: "email", placeholder: "Enter your email" }
  ];

  return (
    <AuthForm
      fields={fields}
      buttonText="Send Reset Link"
      mode="forgot"
    />
  );
};

export default Forgot;