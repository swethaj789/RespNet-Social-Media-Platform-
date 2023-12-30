import { Avatar ,Button,Flex,Text} from "@chakra-ui/react"
import {Link} from "react-router-dom";
import useLogOut from '../../hooks/useLogout';
import useAuthStore from "../../store/authStore";

const SuggestedHeader = () => {
  const {handleLogout,isLoggingOut}=useLogOut();
  const authUser = useAuthStore((state) => state.user);

  if(!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
			<Flex alignItems={"center"} gap={2}>
                <Link to={`${authUser.username}`}>
                <Avatar size={"lg"} src={authUser.profilePicURL} />
                </Link>
                <Link to={'${authUser.username}'}>
                <Text fontSize={12} fontWeight={"bold"}>
                    {authUser.username}
                </Text>
                </Link>
            </Flex>
            <Button
            size={"xs"}
            background={"transparent"}
            _hover={{background: "transparent"}}
                fontSize={14}
                fontWeight={"medium"}
                color={"blue.400"}
                onClick={handleLogout}
                isLoading={isLoggingOut}
                cursor={"pointer"}
                >
                    Log Out
              
            </Button>    
          </Flex>
  );
};

export default SuggestedHeader