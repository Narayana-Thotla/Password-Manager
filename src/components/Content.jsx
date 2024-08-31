import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "../value/valueSlice";
import { setformValue } from "../setform/setformSlice";
import "./Content.css";

const Main = () => {
  const [formData, setFormData] = useState({
    site: "",
    username: "",
    password: "",
  });
  
  
  const [items, setItems] = useState([]);
  const ref = useRef(null);
  const butref = useRef();
  const dispatch = useDispatch();
  dispatch(setformValue(formData))

  useEffect(() => {
    // 
      const getitems = JSON.parse(localStorage.getItem("passwords"));

    if (getitems) {
      setItems(getitems);
      dispatch(setValue(getitems));
    }
    console.log(getitems);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("passwords", JSON.stringify([...items, formData]));
    setItems([...items, formData]);
    dispatch(setValue([...items, formData]));
    console.log("Form Data Submitted:", formData);
  };

  // const showPassword = (e) => {
  //   if (butref.current.src =="openEye.svg") {
  //     butref.current.src ='closeEye.svg'
  //     ref.current.type='password'

  //   }
  //   else {
  //     butref.current.src ='openEye.svg'
  //     ref.current.type = 'text'
  //   }
  // };
  const showPassword = (e) => {
    if (butref.current.src.includes("openEye.svg")) {
      butref.current.src = "closeEye.svg";
      ref.current.type = "text";
    } else {
      butref.current.src = "openEye.svg";
      ref.current.type = "password";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center items-center">
        <div className="m-auto py-4">
          <input
            className="border-2 border-gray-400 rounded-md px-2 my-2 w-[580px]"
            placeholder="URL"
            type="text"
            name="site"
            id=""
            value={formData.site}
            onChange={handleChange}
          />
          <br />
          <div className="flex  justify-between ">
            <input
              className="border-2 border-gray-400 rounded-md px-2 w-[280px]"
              placeholder="Username"
              type="text"
              name="username"
              id=""
              value={formData.username}
              onChange={handleChange}
            />
            <span className="border-2 border-gray-400 rounded-md px-2 w-[280px] ">
              <input
                className="outline-none"
                ref={ref}
                placeholder="Password"
                type="password"
                name="password"
                id=""
                value={formData.password}
                onChange={handleChange}
              />
              {/* <button className="pt-[6px]">  */}

              <img
                className="inline cursor-pointer"
                onClick={showPassword}
                ref={butref}
                src="openEye.svg"
                alt=""
              />
              {/* </button> */}
            </span>
          </div>
          {/* <button
            className="flex m-auto gap-1 bg-green-400 px-2 py-1 rounded-md w-[90px] mt-3"
            type="submit"
          >
            <img src="/save.svg" alt="" />
            Save
          </button> */}
          <div className="flex justify-center mt-2">
            <button
              className="btn-12 flex m-auto gap-1 bg-gray-800 px-2 py-1 rounded-2xl w-[110px] mt-1"
              type="submit"
            >
              <span className="flex p-1">
                <img className="invert" src="/save.svg" alt="" />
                Save
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Main;
