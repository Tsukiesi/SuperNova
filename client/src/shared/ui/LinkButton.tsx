import { Link } from "react-router-dom";
interface LinkButtonProps {
  to: string;
  children: string;
}
function LinkButton({ to, children }: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={
        "inline-flex shrink-0 items-center justify-center text-sm font-medium px-3 h-9 rounded-4xl bg-button text-primary hover:bg-button/80 select-none outline-none"
      }
    >
      {children}
    </Link>
  );
}

export default LinkButton;
