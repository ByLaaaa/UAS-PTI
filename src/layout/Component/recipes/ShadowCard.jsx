import { useNavigate } from "react-router-dom";

function ShadowCard({ img, id, name, kategori }) {
  const navigate = useNavigate();

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
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => navigate(`/recipes/${id}`)}>Check Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShadowCard;
