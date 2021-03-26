import { Box, Button, Center, Text } from "@chakra-ui/react";
import React from "react";

interface IFinish {
  onInvite: () => void;
}

const Finish: React.FC<IFinish> = ({ onInvite }) => {
  return (
    <Center>
      <Box bg="brand.bgPrimary" w="2xl" p="3" borderRadius="lg">
        <Center>
          <Text color="green.300" mb="6">
            You have successfuly create a meeting
          </Text>
        </Center>
        <Box>
          <Box>
            <Text color="brand.text" mb="6">
              You have no teammates
            </Text>
          </Box>
          <Button onClick={onInvite}>Invite Teammates</Button>
        </Box>
      </Box>
    </Center>
  );
};

export default Finish;
