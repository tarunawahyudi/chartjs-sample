import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.legend.position = 'right';