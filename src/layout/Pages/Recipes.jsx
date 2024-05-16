import About from '../Component/recipes/About'
import Cards from '../Component/recipes/Cards'
import Filter from '../Component/recipes/Filter'
import Layout from '../Layout'
import axios from 'axios'
import { useState } from 'react'

function Recipes() {
    const [data, setData] = useState(null)
    const url = "https://api-resep-eight.vercel.app/food"
    function getRecepis() {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                console.log(data);
            }
            )
    }
    return (
        <>
        <button onClick={getRecepis}>COBA</button>
        <Layout>
        <div className="flex flex-col">
            <div className="py-20 pb-52"><About /></div>
            <Filter />
        </div>
        </Layout>
        </>
    )
}

export default Recipes