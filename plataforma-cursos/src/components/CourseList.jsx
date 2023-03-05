import CourseCard from "./CourseCard";
import "./CourseList.css";
import PropTypes from "prop-types";

function CoursesList({ list }){
    return(
        <ul className="coursesListContainer">
            {list.map(course => (
                <li key={course.id}>
                    <CourseCard 
                        imageUrl={course.imageUrl}
                        name={course.name}
                        category={course.category}
                        description={course.description}
                        duration={course.duration}
                    />
                </li>
            ))}
            
        </ul>
    )
}

CoursesList.propTypes = {
        list: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired ,
                category: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                duration: PropTypes.number.isRequired,
                imageUrl: PropTypes.string.isRequired
            })
        )
}

CoursesList.defaultProps = {
    list: []
}

export default CoursesList;