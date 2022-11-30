import React from "react";
import { Box, Center, HStack, keyframes, VStack } from "@chakra-ui/react";

const flipTop = keyframes`
    0% {
        /* transform: rotate(45deg); */
        transform: rotate(0);
    } 
    12.5% {
        /* transform: rotate(45deg); */
        transform: rotateY(90deg)
    }
    50% {
        transform: rotateY(90deg);
    }
    62.5% {
        transform: rotateY(0);
    }
    75% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(0);
    }

`;

const flipLeft = keyframes`
    0% {
        /* transform: rotate(45deg); */
        transform: rotate(0);
    } 
    12.5% {
        /* transform: rotate(45deg); */
        transform: rotateX(90deg)
    }
    50% {
        transform: rotateX(90deg);
    }
    62.5% {
        transform: rotateY(0);
    }
    75% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(0);
    }
`;

const flipRight = keyframes`
    0% {
        /* transform: rotate(45deg); */
        transform: rotate(0);
    } 
    12.5% {
        /* transform: rotate(45deg); */
        transform: rotateX(-90deg)
    }
    50% {
        transform: rotateX(-90deg);
    }
    62.5% {
        transform: rotateY(0);
    }
    75% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(0);
    }
`;

const flipBottom = keyframes`
     0% {
        /* transform: rotate(45deg); */
        transform: rotate(0); // show
    } 
    12.5% {
        /* transform: rotate(45deg); */
        transform: rotateY(90deg) // hide
    }
    50% {
        transform: rotateY(90deg);
    }
    62.5% {
        transform: rotateY(0);
    }
    75% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(0);
    }
`;

export function Loading() {
  return (
    <Box w="100vw" h="100vh">
      <Center h="100%" transform="rotate(45deg)" transformOrigin="50% 50%">
        <HStack spacing="0">
          <VStack spacing="0">
            <Box
              w="40px"
              h="40px"
              bgColor="red.400"
              transformOrigin="right 100%"
              animation={`${flipTop} infinite 8s linear`}
            ></Box>
            <Box
              w="40px"
              h="40px"
              bgColor="red.400"
              transformOrigin="0 0"
              animation={`${flipLeft} infinite 8s linear`}
              sx={{
                animationDelay: "3s",
              }}
            ></Box>
          </VStack>
          <VStack spacing="0">
            <Box
              w="40px"
              h="40px"
              bgColor="red.400"
              transformOrigin="left 100%"
              animation={`${flipRight} infinite 8s linear`}
              sx={{
                animationDelay: "1s",
              }}
            ></Box>
            <Box
              w="40px"
              h="40px"
              bgColor="red.400"
              transformOrigin="left"
              animation={`${flipBottom} infinite 8s linear`}
              sx={{
                animationDelay: "2s",
              }}
            ></Box>
          </VStack>
        </HStack>

        {/* <Box
          border="20px solid transparent"
          pos="relative"
          top="-20px"
          borderBottomColor="red.400"
          _before={{
            content: "''",
            pos: "absolute",
            border: "20px solid transparent",
            borderTopColor: "red.400",
            top: "20px",
            left: "-20px",
          }}
        ></Box> */}
      </Center>
    </Box>
  );
}
