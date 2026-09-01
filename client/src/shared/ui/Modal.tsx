import { useRef } from "react";
import { closeElement } from "../lib/helpers";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  isModalActive: boolean;
  closeModal: () => void;
}

function Modal({ children, className, isModalActive, closeModal }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  closeElement(isModalActive, modalRef, "modal", () => closeModal());
  if (!isModalActive) return null;
  return (
    <div className="absolute inset-0 w-screen h-screen z-100 flex justify-center items-center bg-background/50">
      <div ref={modalRef} id="modal" className={className}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
