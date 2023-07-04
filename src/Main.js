import React, { useState } from "react";
import "./Main.css";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    speed: 2,
  });
  const [name, setName] = useState("");

  const handleClick = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=efdd16305a7a9ba0be08d3bb0e169855&units=metric`;
      axios
        .get(apiUrl)
        .then((res) =>
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
          })
        )
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="Home">
      <div className="lol">
        <Form
          className="d-flex justify-content-center"
          style={{ margin: "20px " }}
        >
          <input
            type="text"
            placeholder="Enter City Name"
            className="me-2"
            style={{
              width: "260px",
              borderRadius: "8px",
              border: "none",
              padding: "5px",
            }}
            onChange={(e) => {
              setName(e.target.value);
              console.log(e.target.value);
            }}
          />
          <Button
            style={{ backgroundColor: "white", color: "black" }}
            onClick={handleClick}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
        </Form>
        <div
          className=" d-flex flex-column align-items-center"
          style={{ color: "white" }}
        >
          <img
            src="weather-app.png"
            alt="none"
            style={{ width: "130px", margin: "25px" }}
          ></img>
          <p style={{ fontSize: "60px", marginBottom: "-20px" }}>
            {data.celcius}°C
          </p>
          <p style={{ fontSize: "50px", marginBottom: "15px" }}>{data.name}</p>
        </div>
        <div className=" d-flex justify-content-around mt-4">
          <div className=" d-flex">
            <img
              alt="none"
              src="humidity.png"
              style={{ width: "60px", height: "70px" }}
            ></img>
            <div style={{ color: "white", marginLeft: "8px" }}>
              <p style={{ fontSize: "26px", marginBottom: "-6px" }}>
                {data.humidity}%
              </p>
              <p style={{ fontSize: "26px" }}>Humidity</p>
            </div>
          </div>
          <div className=" d-flex">
            <img
              alt="none"
              src="wind.png"
              style={{ width: "60px", height: "70px" }}
            ></img>
            <div style={{ color: "white", marginLeft: "8px" }}>
              <p style={{ fontSize: "26px", marginBottom: "-6px" }}>
                {data.speed} Km/h
              </p>
              <p style={{ fontSize: "26px" }}>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
