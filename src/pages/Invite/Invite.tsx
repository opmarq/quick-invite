import {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Box, Text, Button, Center, HStack, Avatar } from "@chakra-ui/react";
import debounce from "lodash/debounce";
import { EmailIcon } from "@chakra-ui/icons";

import Combobox, { IItem } from "../../components/Combobox";
import { searchUser, sendInvitation } from "../../api";
import { isEmail } from "../../utils";
import { StateContext } from "../../providers/stateProvider";
import {
  inviteReducer,
  initialState as inviteInitialstate,
  SET_USERS,
  CLEAR_USERS,
  SET_ERROR,
  FETCH_USERS,
} from "./InviteDuck";

const Invite = ({ onInviteDone }: { onInviteDone: any }) => {
  const [{ users, errorMessage, isLoading }, inviteDispatch] = useReducer(
    inviteReducer,
    inviteInitialstate
  );
  const [selected, setSelected] = useState<Array<IItem>>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isInviting, setInviting] = useState(false);
  const { dispatch } = useContext(StateContext);

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleSelect = (item: IItem) => {
    setSelected([...selected, item]);
    setSearchValue("");
    inviteDispatch({ type: CLEAR_USERS });
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
    debounce(async (search) => {
      if (isEmail(search)) {
        inviteDispatch({
          type: SET_USERS,
          payload: [
            {
              firstName: "",
              lastName: "",
              id: search,
              email: search,
            },
          ],
        });
      } else {
        inviteDispatch({
          type: FETCH_USERS,
        });
        try {
          const data = await searchUser(search);
          inviteDispatch({
            type: SET_USERS,
            payload: data,
          });
        } catch (e) {
          inviteDispatch({
            type: SET_ERROR,
            payload: e.message,
          });
        }
      }
    }, 200),
    []
  );

  useEffect(() => {
    if (!searchValue) {
      inviteDispatch({ type: CLEAR_USERS });
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
      <HStack spacing="4">
        <Center w="100%">
          <Combobox
            isLoading={isLoading}
            value={searchValue}
            suggestions={suggestions}
            selected={selected}
            onChange={handleSearch}
            onRemove={handleRemove}
            onSelect={handleSelect}
            helperText={errorMessage}
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
