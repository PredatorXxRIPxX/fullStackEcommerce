import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


export default function Card(props){
    return (
        <div>
            <div>
                <image href="props.link" />
            </div>
            <h3>{props.productName}</h3>
            <footer>
                <div>
                    <h3>{props.price}</h3>
                </div>
                <button>Buy</button>
            </footer>
        </div>
    )
}