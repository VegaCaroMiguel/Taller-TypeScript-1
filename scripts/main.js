import { series } from './dataSeries.js';
var seriesTbody = document.getElementById('seriesTableBody');
var avgSeasons = document.getElementById('avgSeasons');
function renderSeries(series) {
    series.forEach(function (s) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(s.id, "</td>\n            <td>").concat(s.name, "</td>\n            <td>").concat(s.channel, "</td>\n            <td>").concat(s.seasons, "</td>\n        ");
        seriesTbody.appendChild(row);
    });
}
function calculateAvgSeasons(series) {
    var totalSeasons = series.reduce(function (sum, s) { return sum + s.seasons; }, 0);
    return totalSeasons / series.length;
}
// Render table and average
renderSeries(series);
avgSeasons.innerHTML = "Seasons average: ".concat(calculateAvgSeasons(series).toFixed(0));
