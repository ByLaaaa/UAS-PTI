import About from '../Component/recipes/About'
import Filter from '../Component/recipes/Filter'
import Layout from '../Layout'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ShadowCard from '../Component/recipes/ShadowCard'

function Recipes() {
    const [data, setData] = useState([]);
    const Url = "https://api-resep-eight.vercel.app/food";

    useEffect(() => {
        axios.get(Url).then(response => {
            setData(response.data)
            console.log(response.data)
        })
    }, [])

    return (
        <>
        <Layout>
        <div className="flex flex-col">
            <div className="py-20 pb-52"><About /></div>
            <div className="flex flex-col gap-5 pt-12">
                <div className="flex flex-col gap-5">
                    <Filter/>
                    {console.log(data)} 
                    <div className="flex flex-wrap justify-center gap-12">
                        {data && (
                            data.map((Food) => (
                                <ShadowCard
                                    key={Food.id}
                                    name={Food.nama} 
                                    img={Food.image}
                                    count={Food.id}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
        </Layout>
        </>
    )
}

export default Recipes