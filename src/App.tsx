import "./App.css"; // import a css file to a component to use it.
import Listing from "./components/Listing";

function App() {
  return (
    <>
      <main className="bg-[#191919] min-h-screen flex flex-col justify-center items-center p-5">
        <Listing />
      </main>
    </>
  );
}

export default App;
