import React, { useEffect, useState } from "react";
import { Box, Text, Button, Center, HStack } from "@chakra-ui/react";

import Combobox, { IItem } from "../components/combobox";
import { searchUser, IUser } from "../api";
import { isEmail } from "../utils";
import debounce from "lodash/debounce";

const Invite = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [selected, setSelected] = useState<Array<IItem>>([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = debounce((e: any) => {
    setSearchValue(e.target.value);
  }, 200);

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
    console.log("called");
    if (isEmail(searchValue)) {
      setUsers([
        {
          firstName: "",
          lastName: "",
          id: searchValue,
          email: searchValue,
        },
      ]);
    } else {
      searchUser(searchValue).then((data) => {
        setUsers(data);
      });
    }
  }, [searchValue]);

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
