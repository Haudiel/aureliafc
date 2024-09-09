// src/app/theme/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      green: "#34797e", // Color del texto "Aurelia"
      pink: "#E89BB3",  // Color de las flores
      beige: "#F9F4F3", // Color del fondo
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.beige", // Fondo neutro
        color: "brand.green", // Texto principal
      },
      a: {
        color: "brand.green", // Color de los enlaces
        _hover: {
          color: "brand.pink", // Hover de los enlaces
        },
      },
    },
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Montserrat', sans-serif",
  },
});

export default theme;
