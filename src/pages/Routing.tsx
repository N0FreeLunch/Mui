import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { YearPage, BirthDayPage} from '@src/pages/SampleForm/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/year",
    element: <YearPage/>
  },
  {
    path: "/birthday",
    element: <BirthDayPage/>
  }
]);

const Routing = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default Routing;
