import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"

function App() {
  return (
    <>
      <Navbar />
      <main id="PageContainer">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
