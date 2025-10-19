import React from "react";
const Card = (props) => {
    const infoCard = props.cardInfo
    return (

        <div className="col-md-3 col-sm-6 mb-3">
            <div className="card">{infoCard.card}
                <div className="ratio ratio-1x1">
                <img src={infoCard.imgUrl} className="w-100 object-fit-cover"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title mb-3">{infoCard.title}</h5>
                    <p className="card-text" style={{height: "15rem"}}>{infoCard.description}</p>
                    <a href="#" className="btn btn-outline-danger">Horarios y profesores</a>
                </div>

            </div>

           
        </div>
    )
}
export default Card