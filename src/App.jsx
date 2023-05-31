import MainHeader from "./components/MainHeader";
import MainPage from "./components/MainPage";
import "./App.css";
import MainAudio from "./components/MainAudio";
import MainModal from "./components/MainModal";

function App() {
  return (
    <div id="app" className="p-6">
      <MainAudio />
      <MainModal />
      <MainHeader />
      <MainPage />
    </div>
  );
}

export default App;
