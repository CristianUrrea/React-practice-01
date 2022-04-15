import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, code, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
  console.log(data)
  if (!data) return null;
  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }
  let id = `select-${code}`;
  let options = data.data;
  //   let label = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <>
      <label htmlFor={id} style={{ textTransform: "capitalize" }}>
        {title}:
      </label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige una {title}</option>
        {data &&
          options.map((el, index) => (
            <option key={index} value={el['CCOM']}>
              {el[code]}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectList;
