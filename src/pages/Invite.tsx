import { useCallback, useEffect, useState } from "react";
import { Box, Text, Button, Center, HStack, Avatar } from "@chakra-ui/react";
import debounce from "lodash/debounce";
import { EmailIcon } from "@chakra-ui/icons";

import Combobox, { IItem } from "../components/Comboxbox";
import { searchUser, IUser } from "../api";
import { isEmail } from "../utils";

const Invite = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [selected, setSelected] = useState<Array<IItem>>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        searchUser(search).then((data) => {
          setUsers(data);
          setIsLoading(false);
        });
      }
    }, 200),
    []
  );

  useEffect(() => {
    if (!searchValue) {
      setUsers([]);
    } else {
      buildSuggestions(searchValue);
    }
  }, [searchValue, buildSuggestions]);

  const suggestions = users.map(
    ({ firstName, email, id }): IItem => {
      return {
        id,
        text: firstName || email,
        icon: firstName ? (
          <Avatar name={firstName} size="xs" />
        ) : (
          <EmailIcon w="5" color="brand.secondary" />
        ),
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
            isLoading={isLoading}
            value={searchValue}
            suggestions={suggestions}
            selected={selected}
            onChange={handleSearch}
            onRemove={handleRemove}
            onSelect={handleSelect}
          />
        </Center>
        <Center>
          <Button disabled={selected.length === 0} borderRadius="lg">
            Invite
          </Button>
        </Center>
      </HStack>
    </Box>
  );
};

export default Invite;
