import About from '../Component/culinary/AboutCul';
import { useState, useEffect } from 'react';
import Cards from '../Component/culinary/Cards';
import Layout from '../Layout';
import axios from 'axios';

function Culinary() {

    const [data, setData] = useState(null);
    const Url = "https://api-resep-eight.vercel.app/food";

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(Url);
                setData(response.data);        
            }catch(e){
                console.log(e); 
            }
        }
        fetch();
    }, [])

    return (
        <>
        <Layout>
            <About />
            <div className="flex flex-col gap-5 pt-12">
                <div className="flex flex-col gap-5">
                    {console.log(data)} 
                    <div className="flex flex-wrap justify-center gap-12">
                        {data && (
                            data.map((Food) => (
                                <Cards
                                    key={Food.id}
                                    name={Food.nama} 
                                    shortDesc={Food.shortDesc}
                                    img={Food.image}
                                    desc={Food.desc}
                                    price={Food.harga}
                                    category={Food.Kategori}
                                    count={Food.id}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </Layout>
        </>
    );
}

export default Culinary