import { HStack, VStack, Box, Text } from "@chakra-ui/react";

type CardProps = {
  subject: string;
  bgImg: string;
};

export function PopularCard({ subject, bgImg }: CardProps) {
  return (
    <Box py="1rem">
      <HStack
        w="100%"
        h="100%"
        zIndex="1"
        border="1px solid #10162F"
        transition="box-shadow 200ms ease,transform 200ms ease"
        bgImg={bgImg}
        padding="1rem"
        _hover={{
          transform: "translate(4px, -4px)",
          boxShadow: "-8px 8px 0 #10162F",
        }}
      >
        <VStack bgColor="white" w="100%" padding="1.5rem" align="flex-start">
          <Text fontWeight="400" fontSize="1rem">
            Explore All
          </Text>
          <Text fontWeight="700" fontSize="1.375rem">
            {subject}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
