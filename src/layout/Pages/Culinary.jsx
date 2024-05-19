import About from '../Component/culinary/AboutCul';
import { useState, useEffect } from 'react';
import Cards from '../Component/culinary/Cards';
import Layout from '../Layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Culinary() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const Url = "https://api-resep-eight.vercel.app/food";

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(Url);
                setData(response.data);
                setFilteredData(response.data);
            } catch(e) {
                console.log(e);
            }
        }
        fetch();
    }, []);

    useEffect(() => {
        setFilteredData(
            data.filter(food => 
                food.nama.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, data]);

    return (
        <Layout>
            <About />
            <div className="flex flex-col gap-5 pt-12">
            <div className="flex justify-center">
                <input type="text" placeholder="Search menu..."value={searchQuery}onChange={(e) => setSearchQuery(e.target.value)} className="input input-bordered w-full max-w-xs" />
            </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-wrap justify-center gap-12">
                        {filteredData && (
                            filteredData.map((Food) => (
                                <Cards
                                    key={Food.id}
                                    name={Food.nama}
                                    shortDesc={Food.shortDesc}
                                    img={Food.image}
                                    desc={Food.desc}
                                    price={Food.harga}
                                    category={Food.Kategori} // Assuming Food.Kategori is an array
                                    count={Food.id}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Culinary;