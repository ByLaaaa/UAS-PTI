import React from "react";
import axios from "axios";
import { useState } from "react";
import Uduk from '../../../../public/assets/img/NasiUduk.jpg'


function Cards({img, name, shortDesc}) {
  console.log(img)
    return (
        <div className="flex flex-col">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src={img} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {name}
                </h2>
                <p>{shortDesc}</p>
                <div className="card-actions justify-end">
                  {/* <div className="badge badge-outline">{kategori}</div>  */}
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Cards;