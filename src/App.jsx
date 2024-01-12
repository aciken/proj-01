import { Nav } from "./nav";
import { Hero } from "./Hero";
import { Pricing } from "./Pricing";
import { Questions } from "./Questions";
import { Tools } from "./Tools";
import { Footer } from "./Footer";

export function App() {

  return (
    <div>
  <Nav />
  <Hero />
  <Tools />
  <Questions/>
  <Pricing />
  <Footer/>
  </div>
  );
}
