import React, { useState } from "react";

function ShadowCard({ img, id, name, kategori, bahan, cara, count }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.getElementById(`modals_menu-${count}`).showModal();
  };

  const closeModal = () => {
    setShowModal(false);
    document.getElementById(`modals_menu-${count}`).close();
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:items-start">
      <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mb-4 md:mb-0">
        <figure><img src={img} alt={name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-start">
            {kategori && kategori.map((cat, index) => (
              <div key={index} className="badge badge-outline">{cat}</div>
            ))}
          </div>
          <div className="card-actions justify-between">
            <button className="flex flex-col text-wrap btn btn-primary" onClick={openModal}>View Details</button>
          </div>
        </div>
      </div>

      <dialog id={`modals_menu-${count}`} className="modal">
        <div className="modal-box w-full md:w-11/12 max-w-7xl modal-bottom sm:modal-middle">
          <span className="font-bold text-lg">{name}</span>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
          </form>
          <div className="flex flex-col md:flex-row gap-8">
            <img src={img} className="w-full md:w-1/2" alt={name} />
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <span className="text-xl">Bahan</span>
              <ul className="list-disc list-inside">
                {bahan && bahan.map((item, index) => (
                  <li key={index} className="text-l">{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2">
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
