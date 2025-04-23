import imagen2 from "../OIP (1).jpg"

export function Carrusel() {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        //importando imagen de public
                        <img src="holi.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        //importando imagen src
                        <img src={imagen2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        //importando url externa
                        <img src="https://i.pinimg.com/736x/12/d4/5a/12d45ad0247630f13cba55d725363571.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}