import Navbar from "./Navbar/Navbar";

function Base({ title = "Welcome to our Website", children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Base;
