import About from '../Component/culinary/AboutCul';
import { useState, useEffect } from 'react';
import Cards from '../Component/culinary/Cards';
import Layout from '../Layout';
import axios from 'axios';
import Food from '../Component/culinary/Food';
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
                            Food.map((item) => (
                                <Cards
                                    key={item.id}
                                    name={item.nama} 
                                    shortDesc={item.shortDesc}
                                    img={item.image}
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