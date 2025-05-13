import "./App.css";
import { MyComponent } from "./MyComp";
import { ProductsList } from "./ProductsList";
import { MyButton } from "./MyButton";

function App() {
  return (
    <>
      <h1>Тренировка</h1>
      <MyComponent />
      <ProductsList />
      <MyButton />
    </>
  );
}

export default App;
