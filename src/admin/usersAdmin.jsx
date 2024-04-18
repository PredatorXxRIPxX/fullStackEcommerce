import React, { useEffect, useState } from "react";
import "../style/global.css"
import {deleteUser} from "../app/api"
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
import { getUsers } from "../app/api";

export default function UsersAdmin(){
    const [listUser,setListUser] = useState([])
    const fetchData=async()=>{
        try {
            var response = await getUsers()
            setListUser(response.documents)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteuser = async (userId) =>{
        try {
            var response = await deleteUser(userId);
            location.reload();
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
        <Th><p className="text-white font-bold text-xl">User_ID</p></Th>
        <Th><p className="text-white font-bold text-xl">User Name</p></Th>
        <Th><p className="text-white font-bold text-xl">User Email</p></Th>
        <Th isNumeric><p className="text-white font-bold text-xl">User Options </p></Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        listUser.map((element)=>{
            return (
                <Tr>
                    <Td className="text-white font-bold">{element.$id}</Td>
                    <Td className="text-white font-bold">{element.UserName}</Td>
                    <Td className="text-white font-bold">{element.user_email}</Td>
                    <Td className="text-white font-bold"><Button color={"white"} backgroundColor={"red"} onClick={()=>deleteuser(element.$id)}>Delete Account</Button><Button>Details</Button></Td>
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