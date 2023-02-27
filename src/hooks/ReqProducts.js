import { useEffect, useState } from "react";
import axios from "axios";

export function GetListProducts(url) {
  const [request, setRequest] = useState({
    data: [],
    loading: false,
    error: false,
  });

  useEffect(() => {
    setRequest({
      data: [],
      loading: true,
      error: null,
    });
    axios
      .get(url)
      .then((res) => {
        setRequest({
          data: res.data,
          loading: false,
          error: null,
        });
      })
      .catch((e) => {
        setRequest({
          data: [],
          loading: false,
          error: e.response ? e.response.data.message : e,
        });
      });
  }, [url]);

  return request;
}
