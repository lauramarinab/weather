export const Main: React.FC = ({ children }) => {
  return (
    <main
      style={{
        padding: "0 2%",
        maxWidth: 500,
        width: "100%",
        margin: "auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {children}
    </main>
  );
};
