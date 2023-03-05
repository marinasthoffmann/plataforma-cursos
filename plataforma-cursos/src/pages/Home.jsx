import CoursesList from "../components/CourseList";
import CourseFilter from "../components/CourseFilter";
import "./Home.css";

const coursesList = [
  {
    id: 456,
    imageUrl: "./logo.png",
    name: "ReactJS",
    category: "Front-end",
    description: "Curso de ReactJS",
    duration: 6
  },
  {
    id: 101,
    imageUrl: "./logo.png",
    name: "React com TS",
    category: "Front-end",
    description: "Curso de React com TS",
    duration: 10
  },
  {
    id: 111,
    imageUrl: "./logo.png",
    name: "React Router",
    category: "Front-end",
    description: "Curso de ReactJS",
    duration: 6
  },
  {
    id: 121,
    imageUrl: "./logo.png",
    name: "Context API",
    category: "Back-end",
    description: "Curso de React com TS",
    duration: 10
  }
];

function Home() {
  return (
    <div className="Home">
        <CourseFilter />
        <CoursesList list={coursesList}/>
    </div>
  );
}

export default Home;