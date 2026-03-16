function Conditional() {
  const isLoggedIn = true;

  return (
    <h2>
      {isLoggedIn ? "Welcome User" : "Please Login"}
    </h2>
  );
}

export default Conditional;