import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";
// import categories from "./categories";

function App() {

  return (
    <>
      <Header />
      {/* {categories.map(cat => console.log(cat))} */}

      {notes.map(foo => <Note key={foo.key} title={foo.title} content={foo.content} />)}
      <Footer />
    </>
  )
}

export default App
