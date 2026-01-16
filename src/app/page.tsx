
import Contact from "./component/Contact";
import Home from "./component/Home";
import Project from "./component/Project";
import Skills from "./component/Skills";

export default function Page() {
  return (
    <div className="bg-[#F3ECDD] dark:bg-neutral-900">
      <Home />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
