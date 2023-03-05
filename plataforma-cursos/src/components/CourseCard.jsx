import "./CourseCard.css";
import PropTypes from "prop-types";

function CourseCard({ imageUrl, name, category, description, duration }){
    return (
    <div className="courseCard">
        <div className="header">
            {imageUrl && <img src={imageUrl} alt={`Imagem do curso ${name}`}/>}
            <h3>{name}</h3>
        </div>        
        <p>{duration}</p>
        <p>{description}</p>
    </div>
    );
}

CourseCard.propTypes = {
    name: PropTypes.string.isRequired ,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default CourseCard;