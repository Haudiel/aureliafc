'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link"; // Usamos Next.js Link
import { useEffect, useState } from "react";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = isScrolled ? "rgba(38, 125, 122, 0.7)" : "brand.green"; // Fondo verde translúcido al hacer scroll

  return (
    <Box
      as="nav"
      bg={bgColor}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="1000"
      backdropFilter="blur(10px)"
      transition="background-color 0.3s ease"
      px={4}
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxW="1600px" // Ancho máximo para centrar el contenido
        mx="auto" // Centrado horizontal automático
        w="100%" // Asegura que tome todo el ancho disponible
      >
        {/* Logo */}
        <Flex alignItems="center" justifyContent="space-between" px={4} mt={3}>
          <Image src="/logoWhite.svg" alt="Logo" boxSize="75px" />
        </Flex>

        {/* Menu button for mobile */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        {/* Navigation links for larger screens */}
        <HStack
          spacing={8}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <NextLink href="/menu" passHref>
            <Text color="white" cursor="pointer">
              Menú
            </Text>
          </NextLink>
          <NextLink href="/about" passHref>
            <Text color="white" cursor="pointer">
              Sobre Nosotros
            </Text>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Text color="white" cursor="pointer">
              Contacto
            </Text>
          </NextLink>
        </HStack>
      </Flex>

      {/* Responsive menu for smaller screens */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <NextLink href="/menu" passHref>
              <Text cursor="pointer">Menú</Text>
            </NextLink>
            <NextLink href="/about" passHref>
              <Text cursor="pointer">Sobre Nosotros</Text>
            </NextLink>
            <NextLink href="/contact" passHref>
              <Text cursor="pointer">Contacto</Text>
            </NextLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;
