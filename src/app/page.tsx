
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Home from "./component/Home";
import Project from "./component/Project";
import Skills from "./component/Skills";

export default function Page() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f3ea] text-slate-950 dark:bg-[#070816] dark:text-white">
      <Home />
      <Skills />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}
