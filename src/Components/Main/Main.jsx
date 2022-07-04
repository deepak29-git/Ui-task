// import { UseAxios } from "../../api-data/data";
import { Avatar } from "@mui/material";
import { deepOrange,purple,red,pink } from "@mui/material/colors";
import "../Main/Main.css";
import { Statistic } from "../Statistic/Statistic";
import { RightSidebar } from "../RightSidebar/RightSidebar";
export const Main = () => {
  // const {data,error,loading}=UseAxios();
  // console.log(data,error,loading)

  const data = [
    {
      id_icon: "54546464",
      asset_id: "BTC",
      name: "Bitcoin",
      price_usd: 1826.25,
      symbol: "₿",
      bgColor:red[500]
    },
    {
      id_icon: "565464645",
      asset_id: "LTC",
      name: "Litcoin",
      price_usd: 599.25,
      symbol: "Ł",
      bgColor:purple[500]
    },
    {
      id_icon: "856657885",
      asset_id: "XRP",
      name: "Ripple",
      price_usd: 599.25,
      symbol: "X",
      bgColor:pink[400]
    },
    {
      id_icon: "455554454",
      asset_id: "XRP",
      name: "Dash",
      price_usd: 599.25,
      symbol: "D",
      bgColor:deepOrange[500]
    },
  ];
  return (
    <div>
      <div>
        <p className="greetings">
          Welcome back, <span className="user-name">User Name</span>
        </p>
      </div>
      <div className="main-container">
        <div className="one">
          {data.map(({ asset_id, name, price_usd, id_icon, symbol,bgColor }) => (
            <div key={id_icon} className="box">
              <Avatar
                sx={{ bgcolor: bgColor }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                {symbol}
              </Avatar>
              <p className="grey-text">{name}</p>
              <div className="price-container">
                <p className="white-text"> 0.000242 {asset_id}</p>
                <p className="grey-text">{price_usd.toFixed(2)} USD</p>
              </div>
            </div>
          ))}
        </div>
        <div className="two">
          <Statistic />
        </div>
        <div className="three">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};
