import { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ fields, buttonText, mode = "login" }) => {
  const [showPassword, setShowPassword] = useState({});

  const togglePassword = (index) => {
    setShowPassword((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="auth-wrapper">

      {/* SOCIAL (only login/signup) */}
      {mode !== "forgot" && mode !== "reset" && (
        <>
          <div className="auth-social">
            <button>Google</button>
            <button>GitHub</button>
          </div>

          <div className="auth-divider">OR</div>
        </>
      )}

      {/* TITLE */}
      <h2 className="auth-title">
        {mode === "forgot" && "Reset Password"}
        {mode === "reset" && "Set New Password"}
      </h2>

      {/* INPUTS */}
      <div className="auth-inputs">
        {fields.map((field, index) => {
          const isPassword = field.type === "password";

          return (
            <div className="input-group" key={index}>
              <input
                type={
                  isPassword
                    ? showPassword[index]
                      ? "text"
                      : "password"
                    : field.type
                }
                placeholder={field.placeholder}
                className="auth-input"
              />

              {isPassword && (
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => togglePassword(index)}
                >
                  {/* clean eye */}
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M1 12s4-6 11-6 11 6 11 6-4 6-11 6S1 12 1 12z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* BUTTON */}
      <button className="auth-btn">{buttonText}</button>

      {/* FOOTER */}
      <div className="auth-footer">

        {mode === "login" && (
          <Link to="/forgot" className="auth-link">
            Reset Password
          </Link>
        )}

        {mode === "forgot" && (
          <p>
            <Link to="/login" className="auth-link">
              Back to login
            </Link>
          </p>
        )}

        {mode === "reset" && (
          <p>
            <Link to="/login" className="auth-link">
              Back to login
            </Link>
          </p>
        )}

        {mode === "login" && (
          <p style={{ marginTop: "10px" }}>
            Need an account?{" "}
            <Link to="/signup" className="auth-link">Sign up</Link>
          </p>
        )}

        {mode === "signup" && (
          <p style={{ marginTop: "10px" }}>
            Already have an account?{" "}
            <Link to="/login" className="auth-link">Log in</Link>
          </p>
        )}

      </div>

    </div>
  );
};

export default AuthForm;