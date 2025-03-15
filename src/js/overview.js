import '/scss/overview.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useOverviewSlider } from './components/overview/slider.js';
import { useArticlesSlider } from './components/overview/slider.js';
import { useSortTabs } from './components/overview/tabs.js';

useTheme();
useBurger();
useOverviewSlider();
useSortTabs();
useArticlesSlider();