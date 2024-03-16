import {
  AssessmentsIcon,
  CasesStudiesIcon,
  CodeAlongs,
  CompetitionsIcon,
  CoursesIcon,
  PracticeIcon,
  ProjectsIcon,
  TracksIcon,
  TutorialsIcon,
} from "../SVGS/Svgs";

function LeftNavigation() {
  return (
    <section className="bg-datacampBlue w-56 fixed top-[52px] h-full px-4 py-4">
      <nav>
        <h2 className="uppercase text-[10px] text-white tracking-widest">
          Learn
        </h2>
        <ul className="mt-2">
          <li>
            <a className="text-zinc-200 flex py-2 items-center" href="">
              <span className="mr-2">
                <TracksIcon />
              </span>
              <span className="text-zinc-200 font-normal tracking-wider text-sm">
                Tracks
              </span>
            </a>
          </li>
          <li>
            <a className="text-zinc-200 flex py-2 items-center" href="">
              <span className="mr-2">
                <CoursesIcon />
              </span>
              <span className="text-zinc-200 font-normal tracking-wider text-sm">
                Courses
              </span>
            </a>
          </li>
          <li>
            <a className="text-zinc-200 flex py-2 items-center" href="">
              <span className="mr-2">
                <PracticeIcon />
              </span>
              <span className="text-zinc-200 font-normal tracking-wider text-sm">
                Practice
              </span>
            </a>
          </li>
          <li>
            <a className="text-zinc-200 flex py-2 items-center" href="">
              <span className="mr-2">
                <AssessmentsIcon />
              </span>
              <span className="text-zinc-200 font-normal tracking-wider text-sm">
                Assessments
              </span>
            </a>
          </li>
          <li>
            <a className="text-zinc-200 flex py-2 items-center" href="">
              <span className="mr-2">
                <TutorialsIcon />
              </span>
              <span className="text-zinc-200 font-normal tracking-wider text-sm">
                Tutorials
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="mt-2">
        <h2 className="uppercase text-[10px] text-white tracking-widest">
          Learn
        </h2>
        <ul className="mt-2">
          <li>
            <a className="text-zinc-200 flex py-2 items-center" href="">
              <span className="mr-2">
                <ProjectsIcon />
              </span>
              <span className="text-zinc-200 font-normal tracking-wider text-sm">
                Projects
              </span>
            </a>
          </li>
          <li>
            <a className="text-zinc-200 flex py-2 items-center" href="">
              <span className="mr-2 fill-zinc-200">
                <CasesStudiesIcon />
              </span>
              <span className="text-zinc-200 font-normal tracking-wider text-sm">
                Cases of Studies
              </span>
            </a>
          </li>
          <li>
            <a className="text-zinc-200 flex py-2 items-center" href="">
              <span className="mr-2">
                <CodeAlongs />
              </span>
              <span className="text-zinc-200 font-normal tracking-wider text-sm">
                Code Alongs
              </span>
            </a>
          </li>
          <li>
            <a className="text-zinc-200 flex py-2 items-center" href="">
              <span className="mr-2">
                <CompetitionsIcon />
              </span>
              <span className="text-zinc-200 font-normal tracking-wider text-sm">
                Competitions
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export { LeftNavigation };
