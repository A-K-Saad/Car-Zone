import { useState, useEffect } from "react";

const GetCarDatas = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/A-K-Saad/Car-Zone/main/public/Cars.json"
    )
      .then((res) => res.json())
      .then((result) => setCars(result));
  }, []);

  return cars;
};

export default GetCarDatas;
