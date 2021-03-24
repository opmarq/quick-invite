import React, { useState } from "react";
import { Button, Wrap, WrapItem } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  Text,
} from "@chakra-ui/react";

import Combobox from "./components/combobox";

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
            <Text size="xl">Email invite</Text>
            <Text>
              Send members an email invitation to join this workspace.
            </Text>
            <Wrap>
              <WrapItem>
                <Combobox />
              </WrapItem>
              <WrapItem>
                <Button>Invite</Button>
              </WrapItem>
            </Wrap>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
