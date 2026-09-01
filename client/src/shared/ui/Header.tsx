import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LinkButton from "@/shared/ui/LinkButton";
import { useAuth } from "@/features/auth/AuthContext";
import Modal from "./Modal";
import { closeElement } from "../lib/helpers";
interface MenuProps {
  isActive: boolean;
  closeMenu: () => void;
}

function Header() {
  const [isActive, setIsActive] = useState(false);
  const closeMenu = () => setIsActive(false);
  return (
    <header className="fixed top-0 w-full h-20 z-1 text-2xl font-bold border-b border-black bg-primary flex justify-between items-center p-4">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(!isActive);
        }}
        className="cursor-pointer"
      >
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
      <Link to="/" className="text-3xl">
        SuperNova
      </Link>
      <button className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>
      <Menu isActive={isActive} closeMenu={closeMenu} />
    </header>
  );
}

export default Header;

function Menu({ isActive, closeMenu }: MenuProps) {
  const [isModalActive, setIsModalActive] = useState(false);
  const closeModal = () => setIsModalActive(false);
  const menuRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const { logout } = useAuth();
  function handleLogout() {
    localStorage.removeItem("token");
    logout();
    navigate("/login");
  }
  closeElement(isActive, menuRef, "menu", closeMenu, isModalActive);
  return (
    <>
      <nav
        inert={!isActive}
        ref={menuRef}
        id={"menu"}
        className={`fixed -left-36 top-20 bottom-0 w-36 z-1 transition-transform duration-500 font-medium bg-primary ${isActive ? "translate-x-36" : "pointer-events-none"} `}
      >
        <ul className="h-[calc(100vh-80px)] pt-4 flex flex-col gap-8 items-center">
          <li>
            <LinkButton to="/">Missions</LinkButton>
          </li>
          <li>
            <LinkButton to="/">Exoplanets</LinkButton>
          </li>
          <li className="absolute bottom-4">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalActive(!isModalActive);
              }}
            >
              Settings
            </Button>
          </li>
        </ul>
      </nav>
      <Modal
        isModalActive={isModalActive}
        closeModal={closeModal}
        className="w-100 h-100 bg-primary rounded-4xl flex flex-col items-center gap-2 p-4"
      >
        <h1>Settings</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </Modal>
    </>
  );
}
