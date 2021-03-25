import React, { useCallback, useEffect, useState } from "react";
import { Box, Text, Button, Center, HStack } from "@chakra-ui/react";

import Combobox, { IItem } from "../components/combobox";
import { searchUser, IUser } from "../api";
import { isEmail } from "../utils";
import debounce from "lodash/debounce";

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

  const buildSuggestions = useCallback(
    debounce((search) => {
      if (isEmail(search)) {
        setUsers([
          {
            firstName: "",
            lastName: "",
            id: search,
            email: search,
          },
        ]);
      } else {
        searchUser(search).then((data) => {
          setUsers(data);
        });
      }
    }, 200),
    []
  );

  useEffect(() => {
    buildSuggestions(searchValue);
  }, [searchValue, buildSuggestions]);

  const suggestions = users.map(
    ({ firstName, email, id }): IItem => {
      return {
        id,
        text: firstName || email,
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
            value={searchValue}
            suggestions={suggestions}
            selected={selected}
            onChange={handleSearch}
            onRemove={handleRemove}
            onSelect={handleSelect}
          />
        </Center>
        <Center>
          <Button disabled={selected.length === 0}>Invite</Button>
        </Center>
      </HStack>
    </Box>
  );
};

export default Invite;
