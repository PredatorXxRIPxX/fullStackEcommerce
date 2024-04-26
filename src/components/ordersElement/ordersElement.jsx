import React, { useState } from "react";
import { Card ,Image ,Stack,Heading,CardBody,Text,CardFooter,Button} from "@chakra-ui/react";


export default function OrdersElement (props){
    const [quantite,setQuantite] = useState(1);
    return (
        <div className="m-4">
                <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    >
    <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={props.image}
        alt={props.name}
    />

    <Stack>
        <CardBody>
        <Heading size='md'>{props.name}</Heading>

        <Text py='2'>
            {props.discription}
        </Text>
        </CardBody>

        <CardFooter>
        <Button variant='solid' colorScheme="blue" onClick={()=>{quantite>=1?setQuantite(quantite--):setQuantite(1)}}>
            -
        </Button>
        <Text margin={"1.25rem"}>
            {quantite}
        </Text>
        <Button variant='solid' colorScheme='blue' onClick={()=>setQuantite(quantite++)}>
            +
        </Button>
        </CardFooter>
    </Stack>
    </Card>
        </div>
    )
}