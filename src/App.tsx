import { useState } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Grid,
  GridItem,
  Button,
  Link,
  useBreakpointValue
} from '@chakra-ui/react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  const NAV_LINKS = (
    <>
      <Link as={RouterLink} to='/mari'>
        <Button className='w-full' variant='ghost' isActive={location.pathname.includes('mari')}>
          Mari Shop Calculator
        </Button>
      </Link>
      <Link as={RouterLink} to='/engravings'>
        <Button
          className='w-full'
          variant='ghost'
          isActive={location.pathname.includes('engravings')}
        >
          Engravings Planner
        </Button>
      </Link>
    </>
  );

  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true });
  console.log('🚀 ~ file: App.tsx:22 ~ App ~ isDesktop:', isDesktop);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      {!isDesktop ? (
        <div className='h-10 mb-4 flex justify-end p-4'>
          <Button onClick={() => setIsOpen(true)}>Menu</Button>
        </div>
      ) : null}
      <Grid className='h-screen' templateColumns='repeat(4, 1fr)'>
        {isDesktop ? (
          <GridItem colSpan={1} as='nav' className='p-4 flex flex-col gap-2'>
            <div className='h-20' />
            {NAV_LINKS}
          </GridItem>
        ) : null}
        <GridItem colSpan={isDesktop ? 3 : 4} className='pl-4'>
          <Outlet />
        </GridItem>
      </Grid>
      <Drawer isOpen={isOpen} placement='left' onClose={() => setIsOpen(false)}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <div className='flex flex-col gap-2'>{NAV_LINKS}</div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </main>
  );
}

export default App;
