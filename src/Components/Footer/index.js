import React from "react";
import {
  Box,
  Link,
  Container,
  Flex,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

const Links = ["LINKEDIN", "YOUTUBE", "INSTAGRAM", "TWITTER"];

const NavLink = ({children}: {children: ReactNode}) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const Footer = () => {
  return (
    <Box
      position="sticky"
      display="flex"
      flex="1"
      flexDirection="column"
      justifyContent="center"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{backdropFilter: "blur(10px)"}}
    >
      <Container py={10} align="center" p={2}>
        <Stack
          direction={{base: "row", md: "row"}}
          alignItems="center"
          flexGrow={3}
          mt={{base: 4, md: 0}}
          spacing={12}
        >
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
