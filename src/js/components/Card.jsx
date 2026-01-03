import React from "react";
const Card = (props) => {
    const infoCard = props.cardInfo
    return (

        <div className="col-12 col-sm-6 col-md-3 mb-3">
            <div className="card h-100">{infoCard.card}
                <div className="ratio ratio-1x1">
                    <img src={infoCard.imgUrl}
                        className="img-fluid object-fit-cover"
                        alt={infoCard.title} />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-3">{infoCard.title}</h5>
                    <p className="card-text">{infoCard.description}</p>
                </div>
                <div className="card-footer border-0 bg-white">
                    <a href="#" className="btn btn-outline-danger">Horarios y profesores</a>
                </div>
            </div>

        </div>
    )
}
export default Card