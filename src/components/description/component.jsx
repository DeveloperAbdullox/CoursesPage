import "./component.css"

export default function Card({img, language, rating, title, author, oldPrice, newPrice, lavelIcon, lavel, departmentIcon, department, strategyIcon, strategy, likeIcon}) {
    return (
        <div className="Card">
            <img id="img1" src={img} alt="img" />
            <p id="language">{language}</p>
            <p id="rating">{rating}</p>
            <div className="cardItem">
                <h1>{title}</h1>
                <p id="author">{author}</p>
                <span>{oldPrice}</span>
                <p id="newPrice">{newPrice}</p>
                <div className="infoItem">
                    <img src={lavelIcon} alt="icon" />
                    <p>{lavel}</p>
                    <img src={departmentIcon} alt="icon" />
                    <p>{department}</p>
                    <img src={strategyIcon} alt="icon" />
                    <p>{strategy}</p>
                    <div>
                        <img id="like" src={likeIcon} alt="icon" />
                    </div>
                </div>
            </div>
        </div>
      );
}