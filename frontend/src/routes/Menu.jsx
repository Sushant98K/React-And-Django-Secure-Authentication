import React, { useEffect, useState } from 'react'

import { get_notes } from '../endpoint/api';

import { VStack, Heading } from "@chakra-ui/react";

const Menu = () => {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await get_notes()
      setNotes(notes)
    }
    fetchNotes()
  }, []);

  return (
    <>

      <VStack m={5}>
        <Heading>Welcome To Menu</Heading>
      </VStack>

    </>
  )
}

export default Menu