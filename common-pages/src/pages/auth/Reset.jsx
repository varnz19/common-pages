import AuthForm from "../../components/ui/AuthForm";

const Reset = () => {
  const fields = [
    { type: "password", placeholder: "New Password" },
    { type: "password", placeholder: "Confirm Password" }
  ];

  return (
    <AuthForm
      fields={fields}
      buttonText="Reset Password"
      mode="reset"
    />
  );
};

export default Reset;