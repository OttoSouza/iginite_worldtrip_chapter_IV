import { Box, Image, Flex, Text, useColorMode } from "@chakra-ui/react";

export default function Cities({ name, country }) {

  const {colorMode} = useColorMode()
  return (
    <Box h="279px" w="256px" borderRadius="lg" mb="10" >
      <Image src="/london.jpeg" />
      <Flex
        alignItems="center"
        justify="space-between"
        px="1"
        bg="white"
        border="1px"
        borderColor="yellow.200"
      >
        <Flex
          alignItems="center"
          flexDir="column"
          gridGap="4"
          justifyContent="center"
          mt="5"
          pb="6"
          pl="1"
        >
          <Text color={colorMode==="light" ? "" : "gray.600"}>{name}</Text>
          <Text color={colorMode==="light" ? "" : "gray.600"}>{country}</Text>
        </Flex>
        <Image
          w="80px"
          src="https://i.pinimg.com/originals/c3/31/7e/c3317ece9963186a4a7f383d3a4b36bf.png"
          borderRadius="50%"
        />
      </Flex>
    </Box>
  );
}
