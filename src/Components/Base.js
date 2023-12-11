import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function Base({ title = "Welcome to our Website", children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Base;
