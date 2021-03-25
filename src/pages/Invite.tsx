import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Wrap,
  WrapItem,
  Button,
  Flex,
  Center,
  HStack,
} from "@chakra-ui/react";

import Combobox, { IItem } from "../components/combobox";
import { searchUser, IUser } from "../api";

const Invite = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [selected, setSelected] = useState<Array<IItem>>([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleSelect = (item: IItem) => {
    setSelected([...selected, item]);
    setUsers([]);
    setSearchValue("");
  };

  const handleRemove = (item: IItem) => {
    const filtredItems = selected.filter((selectedItem) => {
      return selectedItem.id !== item.id;
    });
    setSelected(filtredItems);
  };

  useEffect(() => {
    searchUser(searchValue).then((data) => {
      setUsers(data);
    });
  }, [searchValue]);

  const suggestions = users.map(
    ({ firstName, id }): IItem => {
      return {
        id,
        text: firstName,
      };
    }
  );

  return (
    <Box>
      <Text size="xl">Email invite</Text>
      <Text>Send members an email invitation to join this workspace.</Text>
      <HStack spacing="16px">
        <Center w="100%">
          <Combobox
            suggestions={suggestions}
            selected={selected}
            onChange={handleSearch}
            onRemove={handleRemove}
            onSelect={handleSelect}
            value={searchValue}
          />
        </Center>
        <Center>
          <Button>Invite</Button>
        </Center>
      </HStack>
    </Box>
  );
};

export default Invite;
