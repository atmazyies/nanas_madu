import { PrototypeProvider } from "./context/PrototypeContext";
import PrototypeUI from "./components/prototype/PrototypeUI";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <PrototypeProvider>
      <HomePage />
      <PrototypeUI />
    </PrototypeProvider>
  );
}

export default App;
