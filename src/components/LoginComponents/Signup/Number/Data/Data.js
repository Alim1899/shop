import React, { useCallback, useState, useEffect } from "react";
import codes from "./CountryCodes.json";
import Number from "../Number";
const Data = (props) => {
  const [dataArrived, setDataArrived] = useState(false);

  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState();
  const [list, showList] = useState(false);
  const [mergedList, setMergedList] = useState([]);

  const selectCountry = (e) => {
    e.preventDefault();
    setCountry(null);

    setCountry({
      src: e.currentTarget.childNodes[0].childNodes[0].src,
      alt: e.currentTarget.childNodes[0].childNodes[0].alt,
      code: e.currentTarget.childNodes[2].childNodes[0].data,
    });
    setOpen(false);
    showList(false);
  };

  const handleMenu = (e) => {
    e.preventDefault();
    setOpen(!open);
    showList(!list);
  };
  const fetchData = useCallback(async () => {
    await fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((response) => response.json())
      .then((data) => {
        const full = []

        codes.forEach((el) => {
          data.forEach((code) => {
            if (el.name === code.name.common) {
              full.push({
                name: code.name.common,
                src: code.flags.svg,
                alt: code.flags.alt,
                dial: el.dial_code,
                code: el.code,
              });
            }
          });
        });
        setMergedList(full);

        setDataArrived(true);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <Number 
      handleMenu={handleMenu}
      dataArrived={dataArrived}
      mergedList={mergedList}
      country={country}
      selectCountry={selectCountry}
      list={list}
      open={open}>
        {props.children}
      </Number>
  );
};

export default Data;
