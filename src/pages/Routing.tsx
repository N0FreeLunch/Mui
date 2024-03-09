import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { YearPage, BirthDayPage} from '@src/pages/SampleForm/index';
import { AddressFormPage, PaymentFormPage, ReviewPage} from '@src/pages/Checkout/index';
import Checkout from "@src/widgets/ui/layout/Checkout";

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
  },
  {
    path: "checkout",
    element: <Checkout />,
    children: [
      {
        path: "address",
        element: <AddressFormPage/>
      },
      {
        path: "payment",
        element: <PaymentFormPage/>
      },
      {
        path: "review",
        element: <ReviewPage/>
      }
    ]
  }
]);

const Routing = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default Routing;
