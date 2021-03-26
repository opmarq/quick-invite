export const Button = {
  baseStyle: {
    fontWeight: "bold",
  },
  sizes: {
    md: {
      fontSize: "16px",
      padding: "16px",
    },
  },
  variants: {
    solid: {
      borderColor: "green.500",
      bg: "#2C54EA",
      color: "white",
      _hover: {
        bg: "#2D4392",
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "solid",
  },
};
