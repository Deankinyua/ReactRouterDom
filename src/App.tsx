import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Help/Faq";
import Contact from "./pages/Help/Contact";
import NotFound from "./pages/NotFound";
import Careers from "./pages/careers/Careers";

// Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

// Loaders
import { careerDetailsLoader, careersLoader } from "./loaders/careersLoader";
import CareerDetails from "./pages/careers/CareerDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>

      <Route path="careers">
        <Route index element={<Careers />} loader={careersLoader}></Route>
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        ></Route>
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
