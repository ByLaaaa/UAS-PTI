import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../Layout';

function Resep() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const Url = `https://api-resep-eight.vercel.app/food/${id}`;

  useEffect(() => {
    axios.get(Url).then(response => {
      setData(response.data);
      console.log(response.data);
    }).catch(error => {
      console.error("There was an error fetching the data!", error);
    });
  }, [id]);

  return (
    <Layout>
      {data ? (
        <div>
          <h1>{data.nama}</h1>
          <img src={data.image} alt={data.nama} />
          <p>{data.desc}</p>
          <p>Price: {data.harga}</p>
          <p>Category: {data.Kategori}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
}

export default Resep;
