import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BirthDayPage} from '@src/pages/SampleForm/index';
import { AddressFormPage, PaymentFormPage, ReviewPage} from '@src/pages/Checkout/index';
import Checkout from "@src/widgets/ui/layout/Checkout";
import { DatePickerPage } from "./Date/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/datepicker",
    element: <DatePickerPage/>
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
