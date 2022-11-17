import { useEffect, useState } from "react";

function useMyself() {
  const [myselfState, setMyselfState] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMyself = async () => {
      setIsLoading(true);
      const request = await fetch(`http://localhost:8080/user/myself`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const response = await request.json();
      if (response.acknowledgement) {
        setIsLoading(false);
        setMyselfState(response.data);
      } else {
        setIsLoading(false);
        console.error(response.response);
      }
    };
    getMyself();
  }, []);

  return [myselfState, isLoading];
}

export default useMyself;
