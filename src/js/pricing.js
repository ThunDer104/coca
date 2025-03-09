import '/scss/pricing.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';
import { useAccordion } from './components/pricing/accordion.js';

useTheme();
useBurger();
usePriceSwitcher();
useAccordion();