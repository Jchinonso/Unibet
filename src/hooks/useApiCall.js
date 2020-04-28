import { useEffect, useState } from "react";
import axios from "axios";

const API_URL =
  "http://api.unicdn.net/v1/feeds/sportsbook/event/live.json?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a";
  

function useApiCall() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    let isStopped = false
    if (!isStopped) {
    const fetchData = () => {
      axios
        .get(API_URL)
        .then(response => setData(response.data.liveEvents))
        .catch(e => console.error(e));
    };
      fetchData();
    }

    return () => {
      isStopped = true
    }
   
  }, []);

  return [data];
}

export default useApiCall;
