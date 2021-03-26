import { useState } from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
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
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} size="lg">
        <ModalOverlay />
        <ModalContent px="6" py="10" bg="brand.bgPrimary">
          <ModalHeader>
            <Center color="brand.heading">Invite members</Center>
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
