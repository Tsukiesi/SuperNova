import Modal from "@/shared/ui/Modal";
import { Button } from "@/components/ui/button";

interface SettingsModalProps {
  isModalActive: boolean;
  closeModal: () => void;
  handleLogout: () => void;
}

function SettingsModal({
  isModalActive,
  closeModal,
  handleLogout,
}: SettingsModalProps) {
  return (
    <Modal
      isModalActive={isModalActive}
      closeModal={closeModal}
      className="w-100 h-100 bg-primary rounded-4xl flex flex-col items-center gap-2 p-4"
    >
      <h1>Settings</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </Modal>
  );
}

export default SettingsModal;
