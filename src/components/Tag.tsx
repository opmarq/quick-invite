import { ReactElement } from "react";
import { Box, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface ITag {
  text: string;
  icon?: ReactElement;
  onClose: () => void;
}

const Tag = ({ text, icon, onClose }: ITag) => {
  return (
    <Box
      bg="brand.bgSecondary"
      py="1"
      px="3"
      borderRadius="lg"
      border="1px"
      borderColor="brand.secondary"
    >
      <Wrap align="center">
        {icon && <WrapItem>{icon}</WrapItem>}
        <WrapItem>
          <Text fontSize="sm" color="brand.secondary">
            {text}
          </Text>
        </WrapItem>
        <WrapItem>
          <CloseIcon
            onClick={onClose}
            cursor="pointer"
            w="10px"
            h="10px"
            color="brand.secondary"
          />
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default Tag;
