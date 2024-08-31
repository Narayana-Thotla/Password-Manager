import { useEffect } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeElement, setValue } from "../value/valueSlice";
import { setformValue } from "../setform/setformSlice";

const Table = () => {
  // useEffect(() => {
  const value = useSelector((state) => state.value.value);
  // console.log(value);
  const dispatch = useDispatch();

  // console.log(value)
  // }, [])

  // const edit = (setFormData,index) => {
  //   const indi = index.index;
  //   const filt = value.filter((_, i) => i == indi);
  //   dispatch(setFormData(filt))
  // };

const copyText = (it)=>{
  navigator.clipboard.writeText(it)
}

  const del = (index) => {
    const indi = index.index;
    console.log(value, indi);
    const filt = value.filter((_, i) => i !== indi);
    console.log(filt);
    dispatch(setValue(filt));
    localStorage.setItem("passwords", JSON.stringify(filt));
  };

  return (
    <div className="flex justify-center  min-h-52">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-3/4 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400  bg-slate-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                URL
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(value)
              ? value.map((e, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <a href={e.site}>
                        {e.site}{" "}
                        <img
                          onClick={() => {
                            copyText(e.site);
                          }}
                          className="inline relative cursor-pointer"
                          src="copy.svg"
                          alt=""
                        />
                      </a>
                    </th>
                    <td className="px-6 py-4  ">
                      {e.username}{" "}
                      <img
                        onClick={() => {
                          copyText(e.username);
                        }}
                        className="inline relative cursor-pointer"
                        src="copy.svg"
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4 ">
                      {e.password}{" "}
                      <img
                        onClick={() => {
                          copyText(e.password);
                        }}
                        className="inline relative cursor-pointer"
                        src="copy.svg"
                        alt=""
                      />
                    </td>
                    <td className="flex gap-4 px-6 py-4">
                      {/* <img
                        onClick={() => {
                          edit({ index });
                        }}
                        className="inline cursor-pointer"
                        src="edit.svg"
                        alt=""
                      /> */}
                      <img
                        onClick={() => {
                          del({ index });
                        }}
                        className="inline cursor-pointer"
                        src="delete.svg"
                        alt=""
                      />
                    </td>
                  </tr>
                ))
              : null}

            {/* { (value || []).map(e => (
   <tr key={e.url} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
     <th
       scope="row"
       className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
     >
       {e.site}
     </th>
     <td className="px-6 py-4">{e.username}</td>
     <td className="px-6 py-4">{e.password}</td>
   </tr>
)) } */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
