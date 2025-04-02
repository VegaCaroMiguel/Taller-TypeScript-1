import { series } from './dataSeries.js';
import { Serie } from './Serie.js'; 

const seriesTbody: HTMLElement = document.getElementById('seriesTableBody')!; 
const avgSeasons: HTMLElement = document.getElementById('avgSeasons')!; 

function renderSeries(series: Serie[]): void {
    series.forEach(s => {
        const row = document.createElement('tr'); 
        row.innerHTML = `
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.channel}</td>
            <td>${s.seasons}</td>
        `;
        seriesTbody.appendChild(row);
    });
}

function calculateAvgSeasons(series: Serie[]): number {
    const totalSeasons = series.reduce((sum, s) => sum + s.seasons, 0);
    return totalSeasons / series.length;
}

// Render table and average
renderSeries(series);
avgSeasons.innerHTML = `Seasons average: ${calculateAvgSeasons(series).toFixed(0)}`;