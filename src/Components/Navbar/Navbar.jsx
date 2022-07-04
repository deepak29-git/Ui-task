import "../Navbar/Navbar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo-container">
          <img
            className="logo-img"
            src="https://i.pinimg.com/550x/5b/9d/3a/5b9d3a04c7385c881915399c1a4b6c64.jpg"
            alt="logo"
          />
          <p className="title">Sabertooth</p>
        </div>
        <div className="user-container">
          <AccountCircleOutlinedIcon className="user-icon"/>
          <p>User Name</p>
          <ArrowDropDownIcon/>
        </div>
      </nav>
      <hr />
    </header>
  );
};
