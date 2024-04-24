import React from "react";
import { Card, CardBody, CardFooter,Stack,Heading,Divider,ButtonGroup,Button,Image,Text } from '@chakra-ui/react'
import { addOrders } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../features/userSlice";

export default function ProductCard(props){
    const dispatch = useDispatch();
    const user = useSelector(getUser);

    const setBuy=(name,price,id)=>{
        console.log(name,price,id)
    }

    const setOrder=(name,price,id)=>{   
        dispatch(addOrders({name:name,price:price,id:id}));
        console.log("done")
        console.log(user)
    }

    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src={props.imageLink}
                    alt={props.heading}
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{props.heading}</Heading>
                        <Text>{props.description}</Text>
                        <Text color='blue.600' fontSize='2xl'>{props.price}</Text>
                    </Stack>
                </CardBody>
            <Divider />
            <CardFooter>
            <ButtonGroup spacing='2'>
            <div onClick={()=>{
                setBuy(props.heading,props.price,props.id);
            }}>
                <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
            </div>
            <div onClick={()=>{
                setOrder(props.heading,props.price,props.id)
            }}>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
            </div>
        </ButtonGroup>
  </CardFooter>
</Card>
        </>
    )
}