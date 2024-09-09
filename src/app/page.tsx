"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  useColorModeValue,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Page() {
  return (
    <>
      {/* Contenedor Principal del Hero */}
      <Box as="section" height="100vh" overflowX="hidden">
        <Container maxW={"7xl"} pt={16}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            {/* Texto Principal del Hero */}
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "teal.400",
                    zIndex: -1,
                  }}
                >
                  Floristería y Café
                </Text>
              </Heading>
              <Text color={"gray.500"}>
                Somos una cafetería y floristería comprometida con ofrecer
                productos de la más alta calidad en un ambiente acogedor.
                Visítanos para disfrutar de nuestros deliciosos cafés y hermosas
                flores.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <NextLink href="/menu" passHref>
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                    colorScheme={"teal"}
                    bg={"teal.400"}
                    _hover={{ bg: "teal.500" }}
                  >
                    Menú
                  </Button>
                </NextLink>

                <NextLink href="/about" passHref>
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                  >
                    Sobre Nosotros
                  </Button>
                </NextLink>
              </Stack>
            </Stack>

            {/* Contenedor de Imagen del Hero */}
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Blob
                w={"150%"}
                h={"150%"}
                position={"absolute"}
                top={"-20%"}
                left={0}
                zIndex={-1}
                color={useColorModeValue("teal.50", "teal.400")}
              />
              <Box
                position={"relative"}
                height={"500px"} // Ajusta la altura aquí
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  objectPosition={"center"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={"/images/cafe4.jpg"}
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* Nueva Sección: Acerca de la Sucursal */}
      <Box as="section" bg={useColorModeValue("gray.100", "gray.800")} py={12}>
        <Container maxW={"7xl"} py={8}>
          <Stack spacing={8} direction={{ base: "column", md: "row" }}>
            <Flex flex={1} justify={"center"} align={"center"}>
              <Box
                height={"600px"}
                width={"full"}
                rounded={"2xl"}
                overflow={"hidden"}
                boxShadow={"2xl"}
              >
                <Image
                  alt={"Sucursal Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={"/images/cafe5.jpg"} // Imagen de la sucursal
                />
              </Box>
            </Flex>

            <Stack flex={1} spacing={4} justify={"center"}>
              <Heading fontSize={"3xl"}>Acerca de la Sucursal</Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                Nuestra sucursal se encuentra en el corazón de la ciudad,
                ofreciendo un ambiente acogedor donde nuestros clientes pueden
                relajarse y disfrutar de nuestras ofertas exclusivas de café y
                flores.
              </Text>
              <Text color={"gray.500"} fontSize={"lg"}>
                Dirección: Paseo Miguel Leyson Pérez, frente a Walmart, Guasave.
              </Text>
              <Text color={"gray.500"} fontSize={"lg"}>
                Horario de atención: Lunes a viernes de 8:00 AM a 8:00 PM.
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
