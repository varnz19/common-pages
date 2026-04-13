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

      {/* SOCIAL */}
      <div className="auth-social">
        <button>Google</button>
        <button>GitHub</button>
      </div>

      {/* DIVIDER */}
      <div className="auth-divider">OR</div>

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
                  {showPassword[index] ? (
                    /* eye off */
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="2"/>
                      <path d="M10.5 6.5A9.77 9.77 0 0112 6c5 0 9 6 9 6a17.7 17.7 0 01-2.5 3.2M6.6 6.6C4.2 8.2 3 12 3 12s4 6 9 6c1.2 0 2.3-.2 3.3-.6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  ) : (
                    /* eye */
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M1 12s4-6 11-6 11 6 11 6-4 6-11 6S1 12 1 12z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  )}
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

        <p style={{ marginTop: "10px" }}>
          {mode === "login" ? (
            <>
              Need an account?{" "}
              <Link to="/signup" className="auth-link">Sign up</Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link to="/login" className="auth-link">Log in</Link>
            </>
          )}
        </p>

      </div>

    </div>
  );
};

export default AuthForm;