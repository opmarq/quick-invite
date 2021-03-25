import { useCallback, useEffect, useState } from "react";
import { Box, Text, Button, Center, HStack } from "@chakra-ui/react";
import debounce from "lodash/debounce";

import Combobox, { IItem } from "../components/combobox";
import { searchUser, IUser } from "../api";
import { isEmail } from "../utils";

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
      <Text color="brand.heading" size="xl" mb="4">
        Email invite
      </Text>
      <Text color="brand.text" mb="4">
        Send members an email invitation to join this workspace.
      </Text>
      <HStack spacing="6">
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
          <Button
            bg="brand.primary"
            color="white"
            disabled={selected.length === 0}
          >
            Invite
          </Button>
        </Center>
      </HStack>
    </Box>
  );
};

export default Invite;
