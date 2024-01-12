import GuardianStoneIcon from '../assets/mari/guardian-stone-crystal.webp';
import DestructionStoneIcon from '../assets/mari/destruction-stone-crystal.webp';
import GreatHonorLeapstoneIcon from '../assets/mari/great-honor-leapstone.webp';
import MarvelousHonorLeapstoneIcon from '../assets/mari/marvelous-honor-leapstone.webp';
import RadiantHonorLeapstoneIcon from '../assets/mari/radiant-honor-leapstone.webp';
import SolarGraceIcon from '../assets/mari/solar-grace.webp';
import SolarBlessingIcon from '../assets/mari/solar-blessing.webp';
import SolarProtectionIcon from '../assets/mari/solar-protection.webp';
import HonorShardPouchSIcon from '../assets/mari/honor-shard-pouch-s.webp';
import HonorShardPouchMIcon from '../assets/mari/honor-shard-pouch-m.webp';
import HonorShardPouchLIcon from '../assets/mari/honor-shard-pouch-l.webp';
import SuperiorOrehaFusionIcon from '../assets/mari/superior-oreha-fusion-material.webp';
import type { MariTableItem } from '../types/mari';

const defaultMariTable: MariTableItem[] = [
  {
    crystalPrice: 140,
    icon: GuardianStoneIcon,
    modifier: 1 / 400,
    name: 'Crystallized Guardian Stone',
    subtext: '(x4000)',
    goldPrice: 0
  },
  {
    crystalPrice: 150,
    icon: DestructionStoneIcon,
    name: 'Crystallized Destruction Stone',
    modifier: 1 / 200,
    subtext: '(x2000)',
    goldPrice: 0
  },
  {
    crystalPrice: 40,
    icon: GreatHonorLeapstoneIcon,
    name: 'Great Honor Leapstone',
    modifier: 1 / 80,
    subtext: '(x80)',
    goldPrice: 0
  },
  {
    crystalPrice: 100,
    icon: MarvelousHonorLeapstoneIcon,
    name: 'Marvelous Honor Leapstone',
    modifier: 1 / 10,
    subtext: '(x10)',
    goldPrice: 0
  },
  {
    crystalPrice: 160,
    icon: RadiantHonorLeapstoneIcon,
    name: 'Radiant Honor Leapstone',
    modifier: 1 / 40,
    subtext: '(x40)',
    goldPrice: 0
  },
  {
    crystalPrice: 120,
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
  },
  {
    crystalPrice: 112,
    goldPrice: 0,
    icon: HonorShardPouchSIcon,
    modifier: 1 / 20,
    name: 'Honor Shared Pouch (Small)',
    subtext: '(x20)'
  },
  {
    crystalPrice: 224,
    goldPrice: 0,
    icon: HonorShardPouchMIcon,
    modifier: 1 / 20,
    name: 'Honor Shared Pouch (Medium)',
    subtext: '(x20)'
  },
  {
    crystalPrice: 291,
    goldPrice: 0,
    icon: HonorShardPouchLIcon,
    modifier: 1 / 20,
    name: 'Honor Shared Pouch (Large)',
    subtext: '(x20)'
  },
  {
    crystalPrice: 45,
    goldPrice: 0,
    icon: SuperiorOrehaFusionIcon,
    modifier: 1 / 30,
    name: 'Superior Oreha Fusion Material',
    subtext: '(x30)'
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
