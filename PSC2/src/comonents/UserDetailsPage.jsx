import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Divider,ButtonGroup,Button,Image,Text } from '@chakra-ui/react'
import { useEffect } from "react"


export const UserDetails = ()=>{
    
    let {id} = useParams()

    const user = useSelector((state)=>{
        const users = state.users || [];
        return users.find((u)=>u.id=id)||null
    })
    

    return(
        <div>
            <h1 style={{fontWeight:"bolder",fontSize:"30px"}}>User Details:{id}</h1>
            <div>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                <Heading size="md">{user.name}</Heading>
                  <Text color="blue.600" fontSize="2xl">
                    Email: {user.email}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    Phone: {user.phone}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    Website: {user.website}
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
        </div>
    )
}