import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function ListEmployees() {
  const [employeesList, setEmployeesList] = useState([]);
  // 新增資料的指令
  useEffect(() => {
    Axios.get("http://localhost:3001/")
      .then((res) => setEmployeesList(res.data))
      .catch((err) => console.error(err));
  });

  // 設定刪除的指令
  const handleDelete = async (id) => {
    try {
      await Axios.delete("http://localhost:3001/delete/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // 設定底色
    <div className="flex bg-blue-400  justify-center">
      <div className="w-full bg-white rounded p-3 m-10">
        {/* 設定底色 */}
        <Link
          to="/create"
          className=" bg-green-600  hover:bg-green-800 focus:ring-4 rounded-sm text-white  p-1 ml-10 "
        >
          Add + Add New Employee
        </Link>
        {/* 標題 */}
        <div className="text-center text-blue-700 text-2xl">
          ABC Company Employee List
        </div>
        <div className="flex justify-center">
          <table className="table">
            {/* 表頭 */}
            <thead>
              <tr className="text-left">
                <th className="w-20">Name</th>
                <th className="w-20">Age</th>
                <th className="w-60 ">Country</th>
                <th className="w-40 ">Position</th>
                <th className="w-30 mr-3">Wage</th>
                <th className="w-50">Action</th>
              </tr>
            </thead>
            {/* 表格主體 */}
            <tbody>
              {employeesList.map((data, i) => (
                <tr key={i}>
                  <td>{data.Name}</td>
                  <td>{data.Age}</td>
                  <td>{data.Country}</td>
                  <td>{data.Position}</td>
                  <td>{data.Wage}</td>
                  <td>
                    <span>
                      {/* 修改按鈕 */}
                      <Link
                        to={`edit/${data.Emp_id}`}
                        className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 gap-1"
                      >
                        Edit
                      </Link>
                      {/* 刪除按鈕 */}
                      <button
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        onClick={(e) => handleDelete(data.Emp_id)}
                      >
                        Delete
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListEmployees;
