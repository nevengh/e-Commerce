import { Container } from "react-bootstrap";
import "./MainLayout.css";
import Header from "@components/common/Header/Header";
import Footer from "@components/common/Footer/Footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <Container>
      <Header />
      <div className="wrapper">
        <Outlet/>
      </div>
      <Footer />
    </Container>
  );
};

export default MainLayout;
