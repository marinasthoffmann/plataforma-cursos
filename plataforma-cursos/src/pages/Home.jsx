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
  },
  {
    id: 222,
    imageUrl: "./logo.png",
    name: "ReactJS",
    category: "Front-end",
    description: "Curso de ReactJS",
    duration: 6
  },
  {
    id: 333,
    imageUrl: "./logo.png",
    name: "React com TS",
    category: "Front-end",
    description: "Curso de React com TS",
    duration: 10
  },
  {
    id: 444,
    imageUrl: "./logo.png",
    name: "React Router",
    category: "Front-end",
    description: "Curso de ReactJS",
    duration: 6
  },
  {
    id: 555,
    imageUrl: "./logo.png",
    name: "Context API",
    category: "Back-end",
    description: "Curso de React com TS",
    duration: 10
  },
  {
    id: 666,
    imageUrl: "./logo.png",
    name: "ReactJS",
    category: "Front-end",
    description: "Curso de ReactJS",
    duration: 6
  },
  {
    id: 777,
    imageUrl: "./logo.png",
    name: "React com TS",
    category: "Front-end",
    description: "Curso de React com TS",
    duration: 10
  },
  {
    id: 888,
    imageUrl: "./logo.png",
    name: "React Router",
    category: "Front-end",
    description: "Curso de ReactJS",
    duration: 6
  },
  {
    id: 999,
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