import { closeElement } from "@/shared/lib/helpers";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkButton from "@/shared/ui/LinkButton";
import { Button } from "@/components/ui/button";
import SettingsModal from "@/features/settings/SettingsModal";
import useAuthStore from "@/features/auth/authStore";
interface HeaderMenuProps {
  isActive: boolean;
  closeMenu: () => void;
}

function HeaderMenu({ isActive, closeMenu }: HeaderMenuProps) {
  const [isModalActive, setIsModalActive] = useState(false);
  const closeModal = () => setIsModalActive(false);
  const menuRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logoutUser);
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
      <SettingsModal
        isModalActive={isModalActive}
        closeModal={closeModal}
        handleLogout={handleLogout}
      />
    </>
  );
}

export default HeaderMenu;
