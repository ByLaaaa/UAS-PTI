import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import Gmap from './Maps/Gmap';


function Cards({img, name, shortDesc, desc, price, category, count}) {
  const [openModal, setOpenModal] = useState(false);  
  const [placesData, setPlaces] = useState([])
    useEffect(() => {
        setPlaces(placesData)
    }, [])
  
  return (
        <>
        <button className="flex flex-col text-wrap" onClick={() => setOpenModal(true)}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src={img} alt="Shoes" /></figure>
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

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Body>
                <div className="space-y-32">
                  <div className="flex flex-row gap-8">
                    <img src={img} className="w-6/12"/>
                    <div className="flex flex-col gap-4">
                      <span className="text-2xl">
                        {name}
                      </span>
                      <span className="text-m">
                        {desc}
                      </span>
                      <span className="text-semibold text-m">
                        {price}
                      </span>
                      {placesData.map((placesData) => (
                        <Gmap longit={placesData.longit} latit={placesData.latit} />
                      ))}
                    </div>
                  </div>
                </div>
              </Modal.Body>
    
              <Modal.Footer>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
          </Modal>
        </>
    )
}

export default Cards;