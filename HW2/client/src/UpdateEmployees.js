import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateEmployee() {
  const { id } = useParams();

  useEffect(() => {
    Axios.get("http://localhost:3001/show/" + id)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          name: res.data[0].Name,
          age: res.data[0].Age,
          country: res.data[0].Country,
          position: res.data[0].Position,
          wage: res.data[0].Wage,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [values, setValues] = useState({
    name: "",
    age: 0,
    country: "",
    position: "",
    wage: 0,
  });

  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    // console.log("values:", values, id);
    Axios.put("http://localhost:3001/update/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <form onSubmit={handleUpdate}>
        <div className="text-center text-blue-700 text-2xl">
          Employee Update
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
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
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
              value={values.age}
              onChange={(e) => setValues({ ...values, age: e.target.value })}
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
              value={values.country}
              onChange={(e) =>
                setValues({ ...values, country: e.target.value })
              }
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
              value={values.position}
              onChange={(e) =>
                setValues({ ...values, position: e.target.value })
              }
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
              value={values.wage}
              onChange={(e) => setValues({ ...values, wage: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateEmployee;
