import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: response } = await axios(url);
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [data, loading];
};
