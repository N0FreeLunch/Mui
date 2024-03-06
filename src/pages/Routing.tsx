import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Sample1, Sample2} from '@src/pages/SampleForm/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/sample1",
    element: <Sample1/>
  },
  {
    path: "/sample2",
    element: <Sample2/>
  }
]);

const Routing = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default Routing;
