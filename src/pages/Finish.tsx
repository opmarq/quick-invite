import React, { useContext } from "react";
import {
  Box,
  Button,
  Center,
  Text,
  List,
  ListItem,
  ListIcon,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { StateContext } from "../providers/stateProvider";
interface IFinish {
  onInvite: () => void;
}

const Finish: React.FC<IFinish> = ({ onInvite }) => {
  const {
    state: { invites },
  } = useContext(StateContext);

  return (
    <Center>
      <Box bg="brand.bgPrimary" w="2xl" px="6" py="10" borderRadius="lg">
        <Center>
          <Text color="green.300" mb="6">
            You have successfuly create a meeting <CheckCircleIcon />
          </Text>
        </Center>
        <Box>
          <Center>
            {invites.length > 0 ? (
              <Box mb="6">
                <Text color="white" mb="6">
                  With the following teammates
                </Text>
                {invites.map((invite) => {
                  return (
                    <List spacing={10}>
                      <ListItem>
                        <Wrap align="center">
                          <WrapItem>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                          </WrapItem>
                          <WrapItem>
                            <Text color="white">{invite}</Text>
                          </WrapItem>
                        </Wrap>
                      </ListItem>
                    </List>
                  );
                })}
              </Box>
            ) : (
              <Text color="brand.text" mb="6">
                You have no teammates
              </Text>
            )}
          </Center>
          <Center>
            <Button onClick={onInvite}>
              {invites.length > 0 ? "Invite more" : "Invite Teammates"}
            </Button>
          </Center>
        </Box>
      </Box>
    </Center>
  );
};

export default Finish;
