import axios from "axios";
import { useEffect, useState } from "react";

export const UseAxios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_KEY = "A18728D5-7B73-4EC8-A0F9-1A6930FB967C";
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://rest.coinapi.io/v1/assets/BTC,LTC,XRP,XRP?apikey=${API_KEY}`,{
         
          }
        );
        setLoading(false);
        setData(data);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);
  return { data, loading, error };
};
