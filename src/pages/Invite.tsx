import React, { useEffect, useState } from "react";
import { Box, Text, Wrap, WrapItem, Button } from "@chakra-ui/react";

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
      <Wrap align="center">
        <WrapItem>
          <Combobox
            suggestions={suggestions}
            selected={selected}
            onChange={handleSearch}
            onRemove={handleRemove}
            onSelect={handleSelect}
            value={searchValue}
          />
        </WrapItem>
        <WrapItem>
          <Button>Invite</Button>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default Invite;
