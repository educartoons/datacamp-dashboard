import { CarrotRight, DataCampLogotype } from "../SVGS/Svgs";

function Header() {
  return (
    <header className="bg-white py-2 px-4 flex items-center sticky top-0">
      <div className="mr-4">
        <DataCampLogotype />
      </div>
      <nav className="mr-2">
        <ul className="flex gap-1 bg-zinc-100 rounded-full">
          <li>
            <a
              className="hover:bg-zinc-200 block text-sm px-4 py-2 rounded-full"
              href=""
            >
              Home
            </a>
          </li>
          <li>
            <a
              className=" bg-datacampBlue text-white font-medium block text-sm px-4 py-2 rounded-full"
              href=""
            >
              Learn
            </a>
          </li>
          <li>
            <a
              className="hover:bg-zinc-200 block text-sm px-4 py-2 rounded-full"
              href=""
            >
              Workspace
            </a>
          </li>
          <li>
            <a
              className="hover:bg-zinc-200 block text-sm px-4 py-2 rounded-full"
              href=""
            >
              Certification
            </a>
          </li>
          <li>
            <a
              className="hover:bg-zinc-200 block text-sm px-4 py-2 rounded-full"
              href=""
            >
              Jobs
            </a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="flex gap-1 bg-zinc-100 rounded-full">
          <li>
            <a
              className="hover:bg-zinc-200 text-sm px-4 py-2 rounded-full flex items-center"
              href=""
            >
              For Business
              <CarrotRight />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
