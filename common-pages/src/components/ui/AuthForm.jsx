const AuthForm = ({ title, fields, buttonText }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
      
      <h2 style={{
        textAlign: "center",
        color: "white",
        marginBottom: "0.5rem"
      }}>
        {title}
      </h2>

      {fields.map((field, index) => (
        <input
          key={index}
          type={field.type}
          placeholder={field.placeholder}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #2A4A57",
            background: "#0A1E26",
            color: "white",
            outline: "none"
          }}
        />
      ))}

      <button
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          background: "#00ADB5",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.2s"
        }}
        onMouseOver={(e) => (e.target.style.opacity = 0.8)}
        onMouseOut={(e) => (e.target.style.opacity = 1)}
      >
        {buttonText}
      </button>

    </div>
  );
};

export default AuthForm;