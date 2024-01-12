import { useState, useCallback, useMemo } from 'react';
import {
  NumberInput,
  NumberInputField,
  InputGroup,
  InputLeftAddon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react';
import { formatNumber, debounce } from '../utils';
import GoldIcon from '../assets/mari/gold.webp';
import BlueCrystalIcon from '../assets/mari/blue-crystal.webp';
import { generateMariTable } from '../utils/mari-utils';
import type { MariTableItem } from '../types/mari';

export function MariView() {
  const [goldValue, setGoldValue] = useState<string>('');
  const [mariTable, setMariTable] = useState<MariTableItem[]>(generateMariTable(0));

  const handleMariTable = useCallback((val: string) => {
    setMariTable(generateMariTable(Number(val ?? 0)));
  }, []);

  const debouncedChange = useMemo(() => debounce(handleMariTable, 600), [handleMariTable]);

  const handleChange = (val: string) => {
    setGoldValue(val === '' ? '' : Number(val).toFixed());
    debouncedChange(val);
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex w-full flex-col gap-2 text-center'>
        <h1 className='text-3xl'>Mari Shop Calculator</h1>
        <p>
          Use this calculator to figure out if it is more worth to purchase from the Auction House
          than it is from Mari's Shop
        </p>
      </div>
      <section className='flex items-center gap-2 align-middle'>
        <div className='w-[12rem]'>
          <InputGroup>
            <InputLeftAddon>
              <img className='h-6 w-6' src={GoldIcon} alt='Gold Icon' />
            </InputLeftAddon>
            <NumberInput onChange={handleChange} value={formatNumber(goldValue)}>
              <NumberInputField />
            </NumberInput>
          </InputGroup>
        </div>
        <div className='flex items-center gap-1'>
          per 95 <img className='h-4 w-4' src={BlueCrystalIcon} alt='Blue Crystal' />
        </div>
      </section>
      <section>
        <TableContainer>
          <Table variant='striped'>
            <TableCaption>Last Updated 1/1/2024</TableCaption>
            <Thead>
              <Tr>
                <Th>Item</Th>
                <Th isNumeric>Crystal Cost</Th>
                <Th isNumeric>Gold Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              {mariTable.map((item) => (
                <Tr key={item.name}>
                  <Td className='flex items-center gap-1'>
                    <img className='h-10 w-10' src={item.icon} alt={item.name} />
                    {item.name} {item.subtext && <span className='text-sm'>{item.subtext}</span>}
                  </Td>
                  <Td isNumeric>
                    <div className='flex items-center justify-end gap-1 font-bold'>
                      {formatNumber(item.crystalPrice, { maximumFractionDigits: 0 })}{' '}
                      <img className='h-4 w-4' src={BlueCrystalIcon} alt='Blue Crystal' />
                    </div>
                  </Td>
                  <Td isNumeric>
                    {item.goldPrice && item.goldPrice > 0 ? (
                      <div className='flex items-center justify-end gap-1 font-bold'>
                        {formatNumber(item.goldPrice, { maximumFractionDigits: 0 })}
                        <img className='h-4 w-4' src={GoldIcon} alt='Gold' />
                      </div>
                    ) : (
                      ''
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </section>
    </div>
  );
}
