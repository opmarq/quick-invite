import { useState } from "react";
import { Box, Button, Center } from "@chakra-ui/react";
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
    <Box>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Invite Teammates
      </Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent p="8">
          <ModalHeader>
            <Center>Invite members</Center>
          </ModalHeader>
          <ModalBody>
            <InvitePage />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default App;
