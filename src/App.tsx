import { FC} from "react" 
import { RouterProvider } from "react-router-dom";
import router from "./router";
const App:FC = function(){
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;