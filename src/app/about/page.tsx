'use client'

import { Box, Heading, Text } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <>
      <Box pt={16}> {/* Aquí agregamos un padding-top de 16 (equivalente a 64px) */}
        <Heading>Sobre Nosotros</Heading>
        <Text>Aquí va la descripción sobre la cafetería...</Text>
      </Box>
    </>
  );
}
