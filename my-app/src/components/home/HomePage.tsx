import { useEffect, useState } from "react";
import { IProductItem } from "./types";
import http from "../../http_common";
const HomePage = () => {
  const [list, setList] = useState<Array<IProductItem>>([]);

  useEffect(() => {
    http.get<Array<IProductItem>>("/api/products").then((resp)=> {
        console.log("Response server", resp);
        setList(resp.data);
    });
  }, []);
  const data = list.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.detail}</td>
    </tr>
  ));

  return (
    <>
      <h1>Головна сторінка</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </>
  );
};

export default HomePage;