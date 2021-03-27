import { useState } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";

import InvitePage from "./pages/Invite/";
import FinishPage from "./pages/Finish";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Box p="3">
      <FinishPage
        onInvite={() => {
          setOpen(true);
        }}
      />
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} size="lg">
        <ModalOverlay />
        <ModalContent px="6" py="10" m="2" bg="brand.bgPrimary">
          <ModalHeader>
            <Center color="brand.heading">
              <Text fontSize="x-large">Invite members</Text>
            </Center>
          </ModalHeader>
          <ModalBody>
            <InvitePage
              onInviteDone={() => {
                setOpen(false);
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default App;
