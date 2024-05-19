import React, { useState, useEffect } from 'react';
import axios from 'axios';
import About from '../Component/recipes/About';
import Layout from '../Layout';
import ShadowCard from '../Component/recipes/ShadowCard';

function Recipes() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null); // State untuk menyimpan detail makanan yang dipilih
  const Url = "https://api-resep-eight.vercel.app/food";

  useEffect(() => {
    axios.get(Url).then(response => {
      setData(response.data);
      setFilteredData(response.data);
    });
  }, []);

  const handleCardClick = (id) => {
    const food = data.find(item => item.id === id);
    setSelectedFood(food);
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="py-20 pb-52">
          <About />
        </div>
        <div className="flex flex-col gap-5 pt-12">
          <div className="flex flex-col gap-5">
            {selectedFood ? ( // Tampilkan detail makanan jika ada yang dipilih
              <div>
                <h2 className="text-2xl font-bold mb-4">{selectedFood.nama}</h2>
                <p className="mb-4">{selectedFood.bahan}</p>
                <p>{selectedFood.resep}</p>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-12">
                {filteredData && filteredData.map((Food) => (
                  <ShadowCard
                    key={Food.id}
                    id={Food.id}
                    name={Food.nama}
                    img={Food.image}
                    kategori={Food.kategori}
                    bahan={Food.bahan} // Menyediakan prop bahan
                    cara={Food.cara} // Menyediakan prop resep
                    count={Food.id}
                    onClick={() => handleCardClick(Food.id)} // Tambahkan event onClick
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Recipes;
