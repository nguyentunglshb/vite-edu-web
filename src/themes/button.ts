export const buttonOveride = {
  transition: "transform 200ms ease 0s, background 200ms ease 0s;",
  _hover: {
    outline: "none",
    borderColor: "rgb(250, 250, 250)",
  },

  variants: {
    base: {
      color: "white",
      fontSize: "md",
      bgColor: "rgb(85, 81, 255)",
      _hover: {
        transform: "translateY(-2px)",
      },
      _focus: {
        outline: "none",
      },
    },
    tag: {
      color: "rgb(144, 144, 144)",
      fontSize: "sm",
      bgColor: "rgb(250, 250, 250)",
      border: "1px solid rgb(170, 170, 170)",
      borderRadius: "100px",
      height: "fit-content",
      padding: "6px 16px",
      _hover: {
        borderColor: "rgb(170, 170, 170)",
      },
      _focus: {
        outline: "none",
      },
    },
    tag_active_purple: {
      bgColor: "rgb(162, 89, 255)",
      color: "white",
      fontSize: "sm",
      border: "1px solid rgb(162, 89, 255)",
      borderRadius: "100px",
      height: "fit-content",
      padding: "6px 16px",
      _hover: {
        borderColor: "rgb(162, 89, 255)",
      },
      _focus: {
        outline: "none",
      },
    },
    navigate: {
      bgColor: "extend",
      border: "none",
      outline: "none",
    },
  },
};
