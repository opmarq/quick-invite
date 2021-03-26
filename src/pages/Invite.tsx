import { useCallback, useContext, useEffect, useState } from "react";
import { Box, Text, Button, Center, HStack, Avatar } from "@chakra-ui/react";
import debounce from "lodash/debounce";
import { EmailIcon } from "@chakra-ui/icons";

import Combobox, { IItem } from "../components/Combobox";
import { searchUser, IUser, sendInvitation } from "../api";
import { isEmail } from "../utils";
import { StateContext } from "../providers/stateProvider";

const Invite = ({ onInviteDone }: { onInviteDone: any }) => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [selected, setSelected] = useState<Array<IItem>>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInviting, setInviting] = useState(false);
  const { dispatch } = useContext(StateContext);

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

  const handleSendInvitation = () => {
    const ids = selected.map(({ text }) => text);
    setInviting(true);
    sendInvitation(ids).then((invites) => {
      dispatch({
        invites,
      });
      setInviting(false);
      onInviteDone();
    });
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
          <Avatar
            name={firstName}
            size="xs"
            bg="brand.secondary"
            color="white"
          />
        ) : (
          <EmailIcon w="5" h="5" color="brand.secondary" />
        ),
      };
    }
  );

  return (
    <Box>
      <Text color="brand.heading" fontSize="md" mb="4">
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
          <Button
            disabled={selected.length === 0}
            borderRadius="lg"
            onClick={handleSendInvitation}
            isLoading={isInviting}
          >
            Invite
          </Button>
        </Center>
      </HStack>
    </Box>
  );
};

export default Invite;
