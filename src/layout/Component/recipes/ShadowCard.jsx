
function ShadowCard({img, keys, name}) {
    return(
        <div className="flex items-center">
            <div id={keys} className="card w-96 bg-base-100 shadow-xl image-full">
              <figure><img src={img} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ShadowCard