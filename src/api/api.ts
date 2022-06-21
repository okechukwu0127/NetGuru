import {ApiResponse, ApiError} from './models';

const ENDPOINT: string = 'https://api.openweathermap.org/data/2.5/weather';
const APP_ID: string = 'd966894458295641097e14b095611e95'; // Get API Key from https://openweathermap.org

interface Response {
  error: null | ApiError;
  data: null | ApiResponse;
}

export const fetchWeather = async (place: string): Promise<Response> => {
  const endpoint = `${ENDPOINT}/?q=${place}&appid=${APP_ID}`;

  let response = {
    error: null,
    data: null,
  };

  try {
    const apiResponse = await fetch(endpoint, {method: 'GET'});
    const apiResponseData = await apiResponse.json();
    response.data = apiResponseData;
    console.log(response.data);
  } catch (error) {
    response.error = error;
  }

  return response;
};
