import { useState } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Grid,
  GridItem,
  IconButton,
  Button,
  Link,
  useBreakpointValue,
  useColorMode
} from '@chakra-ui/react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import { FaRegMoon } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';

function App() {
  const location = useLocation();

  const NAV_LINKS = (
    <>
      <Link as={RouterLink} to='/mari'>
        <Button className='w-full' variant='ghost' isActive={location.pathname.includes('mari')}>
          Mari Shop Calculator
        </Button>
      </Link>
    </>
  );

  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true });

  const [isOpen, setIsOpen] = useState(false);

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <main>
      {!isDesktop ? (
        <div className='mb-4 flex h-10 justify-end p-4'>
          <Button onClick={() => setIsOpen(true)}>Menu</Button>
        </div>
      ) : null}
      <Grid className='h-screen' templateColumns='repeat(5, 1fr)'>
        {isDesktop ? (
          <GridItem colSpan={1} as='nav' className='fixed flex h-full flex-col gap-2 px-4'>
            <div className='flex h-full flex-col justify-between'>
              <div className='mt-20'>{NAV_LINKS}</div>
              <div className='flex gap-2 py-4'>
                <IconButton
                  aria-label='Toggle Color Mode'
                  icon={colorMode === 'light' ? <FaRegMoon /> : <IoSunny />}
                  onClick={toggleColorMode}
                />
              </div>
            </div>
          </GridItem>
        ) : null}
        <GridItem
          colSpan={isDesktop ? 4 : 5}
          className={`${isDesktop ? 'ml-[15rem] ' : ''}mt-4 max-w-screen-lg p-8`}
        >
          <Outlet />
        </GridItem>
      </Grid>
      <Drawer isOpen={isOpen} placement='left' onClose={() => setIsOpen(false)}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className='mt-4'>LOA Tools</DrawerHeader>
          <DrawerBody>
            <div className='flex flex-col gap-2'>{NAV_LINKS}</div>
          </DrawerBody>
          <DrawerFooter>
            <IconButton
              aria-label='Toggle Color Mode'
              icon={colorMode === 'light' ? <FaRegMoon /> : <IoSunny />}
              onClick={toggleColorMode}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </main>
  );
}

export default App;
