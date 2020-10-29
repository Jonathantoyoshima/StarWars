import React from "react";
import Axios from "axios";
import { DetailsRoot, Table, H1 } from "./styles";
import TableRow from "./TableRow";
const BuildCard = ({ data }) => {
  // const [arr, setArr] = React.useState([]);
  // function buildArray() {
  const arr = [];
  for (const x in data) {
    if (data.hasOwnProperty(x)) {
      if (x !== "name" && x !== "title") {
        if (Array.isArray(data[x])) {
          // await Axios.get(data[x]).then((res) => {
          //   arr.push(<TableRow label={x.replace("_", " ")} value={res.data.name} />);
          // });
        } else {
          arr.push(<TableRow key={x} item={x.replace("_", " ")} value={data[x]} />);
        }
      }
    }
  }
  // return arr;
  // }

  // buildArray().then((array) => setArr(array));

  return (
    <Table>
      <tbody>{arr.map((item) => item)}</tbody>
    </Table>
  );
};

const Details = (props) => {
  const { item } = props;
  const [persona, setPersona] = React.useState();

  React.useEffect(() => {
    if (item) {
      Axios.get(item).then((res) => {
        setPersona(res.data);
      });
    }
  }, [item]);

  return (
    <DetailsRoot>
      {persona && persona.name ? <H1>{persona.name}</H1> : null}
      {persona && persona.title ? <H1>{persona.title}</H1> : null}
      <BuildCard data={persona} />
    </DetailsRoot>
  );
};

export default Details;
