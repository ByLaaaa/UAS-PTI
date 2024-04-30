const Navigation = () => {
    return (
      <div className="flex justify-center navbar absolute bottom-6 right-0 ">
        <div className="flex w-6/12 bg-white opacity-50 rounded-3xl">
          <a className="btn btn-ghost text-xl">daisyUI</a>
          <div className="flex gap-4 text-md">
            <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105">
              <a href="/">Home</a>
            </button>
            <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105">
              <a href="/">About Us</a>
            </button>
            <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105">
              <a href="/">Home</a>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Navigation