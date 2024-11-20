import { useState, useEffect } from "react";
import axios from "axios";
import "./History.css";

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const [urlData, seturlData] = useState([]);

  const get_response = async () => {
    try {
      // const body = JSON.parse(localStorage.getItem("userdata"));
      const token = JSON.parse(localStorage.getItem("token")).token;
      console.log(`Received token is ${token}`);
      const response = await axios.post(
        `http://localhost:2000/store/get-response`,
        // {
        //     name: body.name,
        //     phone: body.phone,
        // },
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data.message);
      setHistoryData(response.data.message);
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  const get_image = async () => {npm
    // const body = JSON.parse(localStorage.getItem("userdata"));
    const token = JSON.parse(localStorage.getItem("token")).token;
    await axios
      .post(
        "http://localhost:2000/store/get-image",
        // {
        //   name: body.name,
        //   phone: body.phone,
        // },
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response.data.message);
        seturlData(response.data.message);
      })
      .catch((error) => {
        if (error.response) {
          console.error(error.response.data.message);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      });
  };

  useEffect(() => {
    get_response();
    get_image();
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl mt-10">Check your history here</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {historyData.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <div>{index + 1}</div>
            <div className="w-80">
              <img
                src={urlData[index]}
                alt="plant"
                className="w-full h-52 object-cover"
              />
            </div>
            <div>{historyData[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
