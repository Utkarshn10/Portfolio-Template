import React from "react";
import {
  Container,
  Heading,
  Flex,
  Box,
  Link,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

function About() {
  return (
    <Container maxW={"7xl"} p="12">
      <Box
        marginTop={{base: "1", sm: "5"}}
        display="flex"
        flexDirection={{base: "column", sm: "row"}}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{base: "100%", sm: "85%"}}
            zIndex="2"
            marginLeft={{base: "0", sm: "5%"}}
            marginTop="5%"
          >
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Image
                borderRadius="lg"
                position={"absolute"}
                bottom={"250px"}
                left={"40px"}
                width={"50%"}
                src={
                  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                }
                alt="about-image"
                objectFit="contain"
              />
              <Image
                borderRadius="lg"
                position={"absolute"}
                bottom={"0px"}
                left={"65px"}
                width={"50%"}
                src={
                  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80"
                }
                alt="about-image"
                objectFit="contain"
              />
              <Image
                borderRadius="lg"
                position={"relative"}
                top={"5px"}
                left={"140px"}
                width={"50%"}
                zIndex={-1}
                src={
                  "https://images.unsplash.com/photo-1590071089561-2087ff1fc418?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1960&q=80"
                }
                alt="about-image"
                objectFit="contain"
              />
            </Flex>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{base: "3", sm: "0"}}
        >
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{textDecoration: "none"}}>
              Hey I'm Utkarsh!
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
