import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateEmployee() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const navigate = useNavigate();

  const [employeeList, setEmployeeList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      wage: wage,
      position: position,
    })
      .then((res) => {
        console.log("Success!");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="text-center text-blue-700 text-2xl">
          Add New Employee
        </div>
        <div className="grid gap-6 m-6  md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-50 block w-full p-2.5"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Age:
            </label>
            <input
              type="number"
              name="age"
              id="age"
              onChange={(event) => {
                setAge(event.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-50 block w-full p-2.5"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Country:
            </label>
            <input
              type="text"
              name="Country"
              id="country"
              onChange={(event) => {
                setCountry(event.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Position:
            </label>
            <input
              type="text"
              name="position"
              id="position"
              onChange={(event) => {
                setPosition(event.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Wage (year):
            </label>
            <input
              type="text"
              name="wage"
              id="wage"
              onChange={(event) => {
                setWage(event.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
          >
            Add employee
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEmployee;
