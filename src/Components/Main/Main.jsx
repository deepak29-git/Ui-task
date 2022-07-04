// import { UseAxios } from "../../api-data/data";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import "../Main/Main.css";
import { Statistic } from "../Statistic/Statistic";
export const Main = () => {
  // const {data,error,loading}=UseAxios();
  // console.log(data,error,loading)

  const data = [
    {
      id_icon: "54546464",
      asset_id: "BTC",
      name: "Bitcoin",
      price_usd: 1826.25,
    },
    {
      id_icon: "565464645",
      asset_id: "LTC",
      name: "Litcoin",
      price_usd: 599.25,
    },
    {
      id_icon: "856657885",
      asset_id: "XRP",
      name: "Ripple",
      price_usd: 599.25,
    },
    {
      id_icon: "455554454",
      asset_id: "XRP",
      name: "Dash",
      price_usd: 599.25,
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
          {data.map(({ asset_id, name, price_usd, id_icon }) => (
            <div key={id_icon} className="box">
              <Avatar
                sx={{ bgcolor: deepOrange[500] }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                B
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
         <Statistic/>
        </div>
        <div className="three">
          <div className="balance-box">
            <div>
              <p className="grey-text">Total Balance</p>
              <p className="white-text medium-font">4585563</p>
            </div>
          </div>
          <div className="percentage-box">
            <p className="white-text top-most-title">Top Most</p>
            <div className="bar-container">
              <section>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <h4 className="white-text">85%</h4>
              </section>
              <section>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <h4 className="white-text">15%</h4>
              </section>
              <section>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <h4 className="white-text">70%</h4>
              </section>
              <section>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar blank-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <div className="percentage-bar"></div>
                <h4 className="white-text">45%</h4>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
