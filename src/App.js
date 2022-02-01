import "./App.css";
import {Box, Container} from "@chakra-ui/react";
import Navbar from "./Components/Navbar/index";
import About from "./Components/About/index";
import Footer from "./Components/Footer/index";
import Testimonials from "./Components/Testimonials/index";

function App() {
  return (
    <Box maxWidth={"100%"}>
      <Navbar />
      <About />
      <Testimonials />
      <Footer />
    </Box>
  );
}

export default App;
