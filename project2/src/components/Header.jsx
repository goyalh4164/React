import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
  } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  return (
  <>
  <Button>
    <BiMenuAltLeft size={'20'} />
  </Button>
  </>
  )
}

export default Header
