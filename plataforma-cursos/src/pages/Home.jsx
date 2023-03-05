import CourseCard from "../components/CourseCard"

function Home() {
  return (
    <div className="Home">
        <CourseCard 
          imageUrl="/logo.png"
          name="ReactJS"
          category="Front-end"
          description="Curso de ReactJS"
          duration={6}
        />
    </div>
  );
}

export default Home