import { isAxiosError } from "axios";

function handleAxiosError(error) {
  if (isAxiosError(error)) {
    // The error was thrown by Axios
    console.error(
      "Axios Error Status:",
      error.response ? error.response.status : "N/A"
    );
    console.error("Axios Error Message:", error.message);
    console.error(
      "Axios Response Data:",
      error.response ? error.response.data : "N/A"
    );
  } else {
    // Handle other types of errors
    console.error("Non-Axios Error:", error.message);
  }
}

export default handleAxiosError;
