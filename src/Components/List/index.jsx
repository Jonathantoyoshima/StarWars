import React from "react";
import Axios from "axios";
import { ButtonList, ListRoot, NextButton, NavigationList } from "./styles";
const List = (props) => {
  const { list, handle } = props;
  const [oList, setList] = React.useState();
  const [arr, setArr] = React.useState([]);
  // const [count, setCount] = React.useState();
  const [next, setNext] = React.useState();
  const [prev, setPrev] = React.useState();

  React.useEffect(() => {
    if (oList) {
      Axios.get(oList).then((res) => {
        console.log(res.data);
        // setCount(res.data.count);
        setNext(res.data.next);
        setPrev(res.data.previous);

        setArr(res.data.results);
      });
    }
  }, [oList]);

  React.useEffect(() => {
    setList(list);
  }, [list]);

  const handleClick = (next) => {
    setList(next);
  };

  return (
    <ListRoot>
      {arr.map((item, index) => {
        return (
          <ButtonList key={index} onClick={() => handle(item.url)}>
            {item.name ? item.name : item.title}
          </ButtonList>
        );
      })}
      <NavigationList>
        {prev ? <NextButton onClick={() => handleClick(prev)}>{"<<< anterior"}</NextButton> : null}
        <div style={{ flex: 1 }} />
        {next ? <NextButton onClick={() => handleClick(next)}>{"próximo >>>"} </NextButton> : null}
      </NavigationList>
    </ListRoot>
  );
};

export default List;
