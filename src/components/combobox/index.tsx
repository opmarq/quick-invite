import React from "react";
import { Box, Wrap, WrapItem } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { EmailIcon, CloseIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";

const Tag = ({ text, icon }) => {
  return (
    <Box bg="white" p="1" borderRadius="base">
      <Wrap align="center">
        <WrapItem>{icon}</WrapItem>
        <WrapItem>{text}</WrapItem>
        <WrapItem>
          <CloseIcon />
        </WrapItem>
      </Wrap>
    </Box>
  );
};

const Combobox = () => {
  return (
    <Box bg="#F0F7FC" p="1" borderRadius="base">
      <Wrap>
        <WrapItem>
          <Tag text="ok@gmail.com" icon={<EmailIcon />} />
        </WrapItem>
        <WrapItem>
          <Tag text="omar@gmail.com" icon={<EmailIcon />} />
        </WrapItem>
        <WrapItem>
          <Tag text="Omar" icon={<Avatar size="xs" name="Omar" />} />
        </WrapItem>
        <WrapItem>
          <Input variant="unstyled" placeholder="Search names or emails" />
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default Combobox;
