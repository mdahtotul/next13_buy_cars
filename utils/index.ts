const axios = require("axios");

const options = {
  method: "GET",
  url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
  params: { model: "cor" },
  headers: {
    "X-RapidAPI-Key": "ec63769b27msh93ced49d8ba141dp1abe0fjsnfb7cf1811f1f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars() {
  try {
    const response = await axios.request(options);
    const allCars = await response.data;
    console.log("🚀 ~ file: index.ts:17 ~ fetchCars ~ allCars:", allCars);
    return allCars;
  } catch (err: any) {
    console.error("🚀 ~ file: index.ts:20 ~ fetchCars ~ err:", err);
  }
}
