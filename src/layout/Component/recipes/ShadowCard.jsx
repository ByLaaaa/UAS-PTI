import React, { useState } from "react";

function ShadowCard({ img, id, name, kategori, bahan, cara, count }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center">
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={img} alt={name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-start">
            {kategori && kategori.map((cat, index) => (
              <div key={index} className="badge badge-outline">{cat}</div>
            ))}
          </div>
          <div className="card-actions justify-between">
            <button className="flex flex-col text-wrap btn btn-primary" onClick={() => document.getElementById(`modals_menu-${count}`).showModal()}>View Details</button>
          </div>
        </div>
      </div>

      <dialog id={`modals_menu-${count}`} className="modal">
        <div className="modal-box w-11/12 max-w-7xl modal-bottom sm:modal-middle">
          <span className="font-bold text-lg">{name}</span>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="flex flex-row gap-8">
            <img src={img} className="w-1/2" alt={name} />
            <div className="flex flex-col gap-4 w-1/2">
              <span className="text-xl">Bahan</span>
              <ul className="list-disc list-inside">
                {bahan && bahan.map((item, index) => (
                  <li key={index} className="text-l">{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 w-1/2">
            <span className="text-xl">Cara Pembuatan</span>
              <ol className="list-decimal list-inside">
                {cara && cara.map((step, index) => (
                  <li key={index} className="text-l">{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ShadowCard;
