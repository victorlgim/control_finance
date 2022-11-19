import Menu from "../components/Menu";
import Logo from "../components/Logo";
import "./HomePage.css";

const HomePage = ({ setState }) => {
  return (
    <div className="body-container">
      <div className="container">
        <div className="flex-sections">
          <section className="menu">
            <Menu setState={setState} />
          </section>
          <section className="menu-logo">
            <Logo />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
