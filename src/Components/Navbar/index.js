import React, {ReactNode} from "react";
import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import ThemetoggleButton from "../Themetoggle";

const Links = ["HOME", "PROJECTS", "BLOGS", "YOUTUBE"];

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
function Navbar() {
  return (
    <Box
      position="absolute"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{backdropFilter: "blur(10px)"}}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Stack
          direction={{base: "column", md: "row"}}
          display={{base: "none", md: "flex"}}
          width={{base: "full", md: "auto"}}
          alignItems="center"
          flexGrow={1}
          mt={{base: 4, md: 0}}
          spacing={10}
        >
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </Stack>

        <Box flex={1} align="right">
          {/* <ThemetoggleButton /> */}
          <Box ml={2} display={{base: "inline-block", md: "none"}}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {Links.map((link) => (
                  <MenuItem href="/">
                    <NavLink key={link}>{link}</NavLink>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default Navbar;
