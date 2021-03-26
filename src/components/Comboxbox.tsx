import React, { ReactElement, useRef } from "react";
import { Box, Wrap, WrapItem, Text, Spinner, Center } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { Fade } from "@chakra-ui/transition";

import Tag from "./Tag";

export interface IItem {
  id: string;
  text: string;
  icon?: ReactElement;
}

interface ICombobox {
  suggestions: Array<IItem>;
  selected: Array<IItem>;
  value: string;
  isLoading: boolean;
  onChange: (e: any) => void;
  onRemove: (item: IItem) => void;
  onSelect: (item: IItem) => void;
}

const Combobox: React.FC<ICombobox> = ({
  suggestions = [],
  value,
  selected = [],
  onChange,
  onRemove,
  onSelect,
  isLoading = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const renderSpiner = () => {
    return (
      <Box p="3">
        <Center>
          <Spinner color="white" />
        </Center>
      </Box>
    );
  };

  const renderSuggestions = (suggestions: Array<IItem>) => {
    return suggestions
      .filter(({ id }) => !selected.some((item) => item.id === id))
      .map((item) => (
        <Box
          key={item.id}
          borderBottom="1px"
          p="3"
          cursor="pointer"
          onClick={() => {
            onSelect(item);
            inputRef.current?.focus();
          }}
        >
          <Wrap align="center">
            <WrapItem>{item.icon}</WrapItem>
            <WrapItem>
              <Text color="brand.text">{item.text}</Text>
            </WrapItem>
          </Wrap>
        </Box>
      ));
  };

  return (
    <Box w="100%" position="relative">
      <Box
        px="1"
        py="1"
        bg="brand.bgSecondary"
        borderRadius="xl"
        border="1px"
        borderColor="#383C56"
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        <Wrap align="center">
          {selected.map((item) => {
            return (
              <WrapItem key={item.id}>
                <Tag
                  text={item.text}
                  icon={item.icon}
                  onClose={() => {
                    onRemove(item);
                  }}
                />
              </WrapItem>
            );
          })}
          <WrapItem>
            <Input
              p="1"
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
      <Fade in={isLoading || suggestions.length > 0}>
        <Box
          position="absolute"
          w="100%"
          shadow="lg"
          mt="1"
          bg="brand.bgSecondary"
        >
          {isLoading ? renderSpiner() : renderSuggestions(suggestions)}
        </Box>
      </Fade>
    </Box>
  );
};

export default Combobox;
