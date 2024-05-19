import React, { useState, useEffect } from 'react';
import axios from 'axios';
import About from '../Component/recipes/About';
import Filter from '../Component/recipes/Filter';
import Layout from '../Layout';
import ShadowCard from '../Component/recipes/ShadowCard';

function Recipes() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const Url = "https://api-resep-eight.vercel.app/food";

  useEffect(() => {
    axios.get(Url).then(response => {
      setData(response.data);
      setFilteredData(response.data); // Initialize filtered data
    });
  }, []);

  const handleCategoryChange = (selectedCategories) => {
    if (selectedCategories.length === 0) {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(food => 
        selectedCategories.some(cat => food.kategori.includes(cat))
      ));
    }
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <About />
        <div className="flex flex-col gap-5 pt-12">
          <div className="flex flex-col gap-5">
            <Filter onCategoryChange={handleCategoryChange} />
            <div className="flex flex-wrap justify-center gap-12">
              {filteredData && filteredData.map((Food) => (
                <ShadowCard
                  key={Food.id}
                  id={Food.id}
                  name={Food.nama}
                  img={Food.image}
                  kategori={Food.kategori}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Recipes;
