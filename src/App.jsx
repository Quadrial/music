import "./App.css";
import Header from "./components/Header";
import PageRoutes from "./Routes/PageRoutes";
import { Web3Provider } from "./context/Web3Context";


function App() {
  return (
    <Web3Provider>
      <div className="flex justify-center items-center">
        <div className="w-full md:w-screen lg:w-screen">
          <PageRoutes />
          <Header />
        </div>
      </div>
    </Web3Provider>
  );
}

export default App;
