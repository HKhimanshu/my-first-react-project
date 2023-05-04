import "./Header.css";
function Header({ bgTitle, title }) {
  return (
    <div className="pot">
      <div className="bgtitle">
        <h1>{bgTitle}</h1>
      </div>
      <div className="title">
        <div className="top"></div>
        <div className="himanshu">{title}</div>
        <div className="top"></div>
      </div>
    </div>
  );
}

export default Header;
