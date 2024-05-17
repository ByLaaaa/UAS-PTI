import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import Gmap from './Maps/Gmap';


function Cards({img, name, shortDesc, desc, price, category, count}) {
  const [openModal, setOpenModal] = useState(false);
  
  return (
        <>
        <button className="flex flex-col text-wrap" onClick={() => document.getElementById(`modals_menu-${count}`).showModal()}>
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
              <figure><img src={img} alt="Shoes" className="object-center" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {name}
                </h2>
                <p>{shortDesc}</p>
                <div className="card-actions justify-end">
                  {/* <div className="badge badge-outline">{kategori}</div>  */}
                  <div className="badge badge-outline">{category}</div>
                </div>
              </div>
            </div>
        </button>

        <dialog id={`modals_menu-${count}`} className="modal">
          <div className="modal-box mih-h-screen w-screen">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div className="flex flex-row gap-8">
              <img src={img} className="w-1/2" alt="" />
              <div className="flex flex-col gap-4">
                <span className="text-2xl">{name}</span>
                <span className="text-l">{desc}</span>
                <span className="text-xl">{price}</span>
              </div>
            </div>
          </div>
        </dialog>
        </>
    )
}

export default Cards;