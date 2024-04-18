import React from "react";
import { Card,CardHeader,CardBody ,Heading,Text} from "@chakra-ui/react";

export default function AdminCard(props){
    return(
        <div className="m-4">
             <Card>
                <CardHeader>
                    <Heading size='md'>{props.heading}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{props.info}</Text>
                </CardBody>
            </Card>
        </div>
    )
}