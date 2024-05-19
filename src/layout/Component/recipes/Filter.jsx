// Filter.js
import React, { useState, useEffect } from 'react';

function Filter({ onCategoryChange }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    // Mendapatkan daftar kategori dari API atau sumber lain
    const fetchCategories = async () => {
      const response = await axios.get('https://api-resep-eight.vercel.app/categories');
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    let updatedCategories;
    if (selectedCategories.includes(category)) {
      updatedCategories = selectedCategories.filter(cat => cat !== category);
    } else {
      updatedCategories = [...selectedCategories, category];
    }
    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`btn ${selectedCategories.includes(category) ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filter;
