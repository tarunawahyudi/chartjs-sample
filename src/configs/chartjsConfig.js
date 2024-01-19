import {Chart, ArcElement, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale} from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale);
Chart.defaults.plugins.legend.position = 'right';