import Background from "./Components/Background";
import Foreground from "./Components/Foreground";

const App = () => {
  return (
    <div className="relative bg-zinc-800 w-full h-screen">
      <Background />
      <Foreground />
    </div>
  );
};

export default App;
