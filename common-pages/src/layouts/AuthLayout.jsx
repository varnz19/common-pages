const AuthLayout = ({ children }) => {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #0A1E26, #112B36)"
    }}>
      <div style={{
        width: "350px",
        padding: "2rem",
        borderRadius: "12px",
        background: "#0F2A33",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
      }}>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;