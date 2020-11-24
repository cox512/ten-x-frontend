import axios from "axios";

const KEY = [process.env.REACT_APP_API_KEY1, process.env.REACT_APP_API_KEY2];

const randomAPI = () => {
  let random = Math.floor(Math.random() * 2);
  // console.log("random key:", KEY[random]);
  return KEY[random];
};

export default axios.create({
  baseURL: "https://www.alphavantage.co",
  params: {
    //You will need to switch out these hard coded values
    apikey: `${randomAPI()}`,
  },
});
