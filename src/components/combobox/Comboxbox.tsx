import React, { ChangeEvent, useEffect, useRef } from "react";
import { Box, Wrap, WrapItem } from "@chakra-ui/layout";
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
    <Box bg="white" p="1" borderRadius="base" px="11px">
      <Wrap align="center">
        <WrapItem>{icon}</WrapItem>
        <WrapItem>{text}</WrapItem>
        <WrapItem>
          <CloseIcon onClick={onClose} cursor="pointer" w="10px" h="10px" />
        </WrapItem>
      </Wrap>
    </Box>
  );
};

const Combobox: React.FC<ICombobox> = ({
  suggestions,
  selected,
  onChange,
  onRemove,
  onSelect,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Box w="100%" position="relative">
      <Box bg="#F0F7FC" p="1" borderRadius="base">
        <Wrap align="center">
          {selected?.map((item) => {
            return (
              <WrapItem key={item.id}>
                <Tag
                  text={item.text}
                  icon={<EmailIcon />}
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
              ref={inputRef}
              size="lg"
            />
          </WrapItem>
        </Wrap>
      </Box>
      <Box position="absolute" w="100%">
        <Fade in={suggestions.length > 0}>
          <Box bg="#F0F7FC" mt="1">
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
                    <WrapItem>{item.text}</WrapItem>
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
