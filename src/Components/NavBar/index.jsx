import React from "react";
import { fetchData } from "Utils/API";
import { Button, NavBarRoot } from "./styles";

const Categories = (data) => {
  const arr = [];
  for (const x in data.data) {
    const obj = [x, data.data[x]];
    arr.push(obj);
  }
  return arr;
};

const NavBar = ({ handle }) => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    fetchData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <NavBarRoot>
      {Categories(data).map((item, index) => {
        return <Button key={index} onClick={() => handle(item[1])}>{`${item[0]}`}</Button>;
      })}
    </NavBarRoot>
  );
};
export default NavBar;
