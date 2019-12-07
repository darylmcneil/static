import { sleep } from"k6";
import http from "k6/http";

export let options = {
  duration: "1m",
  vus: 50,
  thresholds: {
    http_req_duration: ["p(95)<500"]
  }
};



export default function() {
  http.get("http://jenbucketnano.s3-website-us-west-2.amazonaws.com");
  sleep(3);
}