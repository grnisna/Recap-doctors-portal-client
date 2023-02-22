import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Routes/Routes";


function App() {
  return (
    <div className="lg:w-[1278px] mx-auto">
      <RouterProvider router={router}  />
    </div>
  );
}

export default App;
