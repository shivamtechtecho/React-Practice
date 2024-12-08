import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Image,Text,Button, Card, Flex, Avatar, Box, Heading, IconButton,  CardHeader, CardBody, CardFooter, Center } from "@chakra-ui/react";
// import { BsThreeDotsVertical } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike,BiChat,BiShare } from 'react-icons/bi';

export const Details = () => {
  let { id } = useParams();

  const user = useSelector((state) => {
    const users = state.users || [];
    return users.find((u) => u.id == id) || null;
  });

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
      <h1 style={{textAlign:"center",fontSize:"50px"}}>Details Page</h1>
      <Card maxW="md">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_OoPxIQHQig7pdVlr0sTV_NREBgue2ailA&s" />

              <Box>
                <Heading size="sm">{user.name}</Heading>
                <Text>{user.address.city},{user.address.street}</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<BsThreeDotsVertical />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            Email: {user.email}
            <br/>
            Phone: {user.phone}
            <br/>
            Website: {user.website}
          </Text>
        </CardBody>
        <Image
          objectFit="cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTCxEnC24FVEtR_vH8jbAOqmn37vPBP5NZg&s"
          alt="Chakra UI"
        />

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
            Like
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
            Comment
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
