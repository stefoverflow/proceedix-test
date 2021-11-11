import Axios from "axios";

const httpClient = Axios.create({
  baseURL: `${process.env.REACT_APP_PROCEEDIX_API_URL}`,
});
export default httpClient;
