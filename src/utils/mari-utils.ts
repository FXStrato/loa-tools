import GuardianStoneIcon from '../assets/mari/guardian-stone-crystal.webp';
import DestructionStoneIcon from '../assets/mari/destruction-stone-crystal.webp';
import HonorLeapstoneIcon from '../assets/mari/honor-leapstone.webp';
import GreatHonorLeapstoneIcon from '../assets/mari/great-honor-leapstone.webp';
import MarvelousHonorLeapstoneIcon from '../assets/mari/marvelous-honor-leapstone.webp';
import RadiantHonorLeapstoneIcon from '../assets/mari/radiant-honor-leapstone.webp';
import SolarGraceIcon from '../assets/mari/solar-grace.webp';
import SolarBlessingIcon from '../assets/mari/solar-blessing.webp';
import SolarProtectionIcon from '../assets/mari/solar-protection.webp';
import type { MariTableItem } from '../types/mari';

const defaultMariTable: MariTableItem[] = [
  {
    crystalPrice: 280,
    icon: GuardianStoneIcon,
    modifier: 0.0025,
    name: 'Crystallized Guardian Stone',
    subtext: '(x4000)',
    goldPrice: 0
  },
  {
    crystalPrice: 150,
    icon: DestructionStoneIcon,
    name: 'Crystallized Destruction Stone',
    modifier: 0.01,
    subtext: '(x1000)',
    goldPrice: 0
  },
  {
    crystalPrice: 45,
    icon: HonorLeapstoneIcon,
    name: 'Honor Leapstone',
    modifier: 1 / 30,
    subtext: '(x30)',
    goldPrice: 0
  },
  {
    crystalPrice: 175,
    icon: GreatHonorLeapstoneIcon,
    name: 'Great Honor Leapstone',
    modifier: 1 / 50,
    subtext: '(x50)',
    goldPrice: 0
  },
  {
    crystalPrice: 100,
    icon: MarvelousHonorLeapstoneIcon,
    name: 'Marvelous Honor Leapstone',
    modifier: 0.1,
    subtext: '(x10)',
    goldPrice: 0
  },
  {
    crystalPrice: 175,
    icon: RadiantHonorLeapstoneIcon,
    name: 'Radiant Honor Leapstone',
    modifier: 1 / 30,
    subtext: '(x30)',
    goldPrice: 0
  },
  {
    crystalPrice: 60,
    icon: SolarGraceIcon,
    name: 'Solar Grace',
    modifier: 1 / 60,
    subtext: '(x60)',
    goldPrice: 0
  },
  {
    crystalPrice: 250,
    icon: SolarBlessingIcon,
    name: 'Solar Blessing',
    modifier: 1 / 50,
    subtext: '(x50)',
    goldPrice: 0
  },
  {
    crystalPrice: 300,
    icon: SolarProtectionIcon,
    name: 'Solar Protection',
    modifier: 1 / 30,
    subtext: '(x30)',
    goldPrice: 0
  }
];

export const generateMariTable = (goldValue: number) => {
  return defaultMariTable.map((item) => {
    return {
      ...item,
      goldPrice: (goldValue / 95) * item.crystalPrice * item.modifier
    };
  });
};
