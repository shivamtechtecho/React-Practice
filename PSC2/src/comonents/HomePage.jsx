import React, { useEffect } from "react";
import { fetchUsers } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Divider,ButtonGroup,Button,Image,Text } from '@chakra-ui/react'
import { Link } from "react-router-dom";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
      {users.map((ele) => {
        return (
          <div key={ele.id}>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                <Link to={`User/${ele.id}`}><Heading size="md">{ele.name}</Heading></Link>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
