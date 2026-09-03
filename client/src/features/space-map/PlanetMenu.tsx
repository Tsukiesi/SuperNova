import LinkButton from "@/shared/ui/LinkButton";
interface PlanetMenuProps {
  name: string;
  closeMenu: () => void;
}

function PlanetMenu({ name, closeMenu }: PlanetMenuProps) {
  return (
    <div className="absolute z-10 top-4 left-4 w-64 h-64 flex flex-col items-center bg-background rounded-4xl p-4">
      <span>{name[0].toUpperCase() + name.slice(1)}</span>
      <LinkButton to={`/space/${name}`} className={"mt-4"}>
        Visit planet
      </LinkButton>
      <button onClick={() => closeMenu()} className="absolute top-4 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default PlanetMenu;
