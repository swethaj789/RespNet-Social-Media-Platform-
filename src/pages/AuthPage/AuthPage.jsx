import {  Container, Flex, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            {/*left hand-side*/}
            <VStack spacing={4} align={"stretch"}>
                <AuthForm/>
                
                {/*<Box textAlign={"center"}>Get the app.</Box>
                <Flex gap={5} justifyContent={"center"}>
                <Image src="/playstore.png" h={10} alt="microsoft"/>
                <Image src="/microsoft.png" h={10} alt="microsoft"/>
  </Flex>*/}
            </VStack>

        </Container>
    </Flex>
  )
}

export default AuthPage;