import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-user@ec2-3-87-248-120.compute-1.amazonaws.com:3000",
  headers: {
    "Content-type": "application/json",
  },
});
