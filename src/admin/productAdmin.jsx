import React, { useEffect, useState } from "react";
import "../style/global.css"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
  } from '@chakra-ui/react'
import { deleteProduct, getProduct } from "../app/api";

export default function ProductAdmin(){
  const [listProduct,setListProduct] = useState([]);
  const [scrollBehav,setScrollBehav] = useState(0);
  const [numberGenerate,setNumberGenerate] = useState(10)
  const handleDelete = async (id_product) =>{
    try {
      var response = await deleteProduct(id_product)
      console.log(response)
      location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const fetchData = async () =>{
    try {
      var result = await getProduct()
      console.log(result)
      setListProduct(result.documents)
      console.log(listProduct)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

    return (
        <>
          <TableContainer>
  <Table variant='simple'>
    <TableCaption><h1 className="text-white font-bold text-2xl">Products in Sale</h1></TableCaption>
    <Thead>
      <Tr>
        <Th><p className="text-white font-bold text-xl">Product id</p></Th>
        <Th><p className="text-white font-bold text-xl">Product name</p></Th>
        <Th><p className="text-white font-bold text-xl">Product Price</p></Th>
        <Th isNumeric><p className="text-white font-bold text-xl">Product Options</p></Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        listProduct.map((Element)=>{
          return (
            <Tr>
              <Td className="text-white font-bold text-lg">{Element.$id}</Td>
              <Td className="text-white font-bold text-lg">{Element.name_product}</Td>
              <Td className="text-white font-bold text-lg">{Element.price_product}</Td>
              <Td><Button color={"white"} backgroundColor={"red"} onClick={()=>handleDelete(Element.$id)}>Delete Product</Button> <Button>Modifier</Button></Td>
            </Tr>
          )
        })
      }
    </Tbody>
  </Table>
</TableContainer>
        </>
    )
}