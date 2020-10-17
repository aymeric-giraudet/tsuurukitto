import { useEffect } from "react";

const useLog = () => {
  useEffect(() => {
    console.log("WOOHOO");
  }, []);
};

export default useLog;
