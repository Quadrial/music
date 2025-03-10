import "./App.css";
import Home from "./musicpages/Music/Home/Home ";
import Header from "./components/Header";
import PageRoutes from "./Routes/PageRoutes";

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full md:w-[400px] lg:w-[400px]">
          <PageRoutes />
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;
