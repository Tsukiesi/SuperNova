import { Button } from "@/components/ui/button";
import { useState } from "react";
interface MenuProps {
  isActive: boolean;
}

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="fixed top-0 w-full h-24 z-1 bg-background flex justify-between items-center p-4">
      <button onClick={() => setIsActive(!isActive)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 50 50"
          fill="currentColor"
        >
          <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
        </svg>
      </button>
      <h1>SuperNova</h1>
      <button>Profile</button>
      <Menu isActive={isActive} />
    </header>
  );
}

export default Header;

function Menu({ isActive }: MenuProps) {
  return (
    <nav
      className={`fixed left-0 top-24 bottom-0 w-36 z-1 bg-background ${isActive ? "inline" : "hidden"} `}
    >
      <ul className="h-[calc(100vh-80px)] pt-4 flex flex-col gap-8 items-center">
        <li>
          <Button>Expolore map</Button>
        </li>
        <li>
          <Button>Missions</Button>
        </li>
        <li>
          <Button>Exoplanets</Button>
        </li>
        <li className="absolute bottom-4">
          <Button>Settings</Button>
        </li>
      </ul>
    </nav>
  );
}
