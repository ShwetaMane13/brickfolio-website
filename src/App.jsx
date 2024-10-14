import "../src/scss/pages/_main.scss";
import { PropertyDisplay } from "./components/PropertyDisplay";
import { PropertyFilters } from "./components/PropertyFilters";
import { TopBar } from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <PropertyFilters />
      <PropertyDisplay />
    </>
  );
}

export default App;
