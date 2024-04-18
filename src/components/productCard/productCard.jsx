import React from "react";
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Divider,ButtonGroup,Button,Image,Text } from '@chakra-ui/react'

export default function ProductCard(props){
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
            <Button variant='solid' colorScheme='blue'>
                Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
            Add to cart
            </Button>
        </ButtonGroup>
  </CardFooter>
</Card>
        </>
    )
}