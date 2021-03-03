import headerStyle from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyle.title}>
        <span>WebDev</span>News
      </h1>
      <p>Acesta este un paragraf nou</p>
    </div>
  );
};

export default Header;
