import img from "../../assets/Icon charity.svg"

import "./component.css"

export default function Card() {
    return (
        <div className="funding">
            <img src={img} alt="img" />
            <div className="funding-item1">
                <div className="funding-item2">
                    <p id="p1">Loyiha rivojiga xissa</p>
                    <button>soon</button>
                </div>
                <p id="p2">Shaxmat rivojiga xissa qo'shing</p>
            </div>
        </div>
    )
}