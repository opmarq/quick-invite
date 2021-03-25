import { useState } from "react";
import { Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  Text,
} from "@chakra-ui/react";

import InvitePage from "./pages/Invite";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Invite Teammates
      </Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Invite members</ModalHeader>
          <ModalBody>
            <InvitePage />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
