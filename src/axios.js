import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-31a2b.cloudfunctions.net/api", // The Api (Cloud Function) URL
  //   baseURL: "http://localhost:5001/challenge-31a2b/us-central1/api", // The Api (Cloud Function) URL For Local Use
});

export default instance;
