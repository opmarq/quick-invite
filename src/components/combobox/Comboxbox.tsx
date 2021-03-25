import React, { ChangeEvent, useRef } from "react";
import { Box, Wrap, WrapItem, Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { EmailIcon, CloseIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { Fade } from "@chakra-ui/transition";

export interface IItem {
  id: string;
  text: string;
}

interface ITag {
  text: string;
  icon: any;
  onClose: () => void;
}

interface ICombobox {
  suggestions: Array<IItem>;
  selected: Array<IItem>;
  value: string;
  onChange: (e: ChangeEvent) => void;
  onRemove: (item: IItem) => void;
  onSelect: (item: IItem) => void;
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
        <WrapItem>{icon}</WrapItem>
        <WrapItem>
          <Text color="brand.secondary">{text}</Text>
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

const Combobox: React.FC<ICombobox> = ({
  suggestions,
  value,
  selected,
  onChange,
  onRemove,
  onSelect,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Box w="100%" position="relative">
      <Box
        px="3"
        py="2"
        bg="brand.bgSecondary"
        borderRadius="xl"
        border="1px"
        borderColor="#383C56"
      >
        <Wrap align="center">
          {selected?.map((item) => {
            return (
              <WrapItem key={item.id}>
                <Tag
                  text={item.text}
                  icon={<EmailIcon color="brand.secondary" />}
                  onClose={() => {
                    onRemove(item);
                  }}
                />
              </WrapItem>
            );
          })}
          <WrapItem>
            <Input
              variant="unstyled"
              onChange={onChange}
              value={value}
              ref={inputRef}
              color="white"
              placeholder={
                selected.length === 0 ? "Search names or emails..." : ""
              }
            />
          </WrapItem>
        </Wrap>
      </Box>
      <Box position="absolute" w="100%">
        <Fade in={suggestions.length > 0}>
          <Box bg="brand.bgSecondary" mt="1">
            {suggestions?.map((item) => {
              return (
                <Box p="3" key={item.id}>
                  <Wrap
                    align="center"
                    cursor="pointer"
                    onClick={() => {
                      onSelect(item);
                      inputRef.current?.focus();
                    }}
                  >
                    <WrapItem>
                      <Avatar size="xs" name={item.text} />
                    </WrapItem>
                    <WrapItem>
                      <Text color="brand.text">{item.text}</Text>
                    </WrapItem>
                  </Wrap>
                </Box>
              );
            })}
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default Combobox;
