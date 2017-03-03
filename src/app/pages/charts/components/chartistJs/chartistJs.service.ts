import {Injectable} from '@angular/core';

import {BaThemeConfigProvider} from '../../../../theme';

@Injectable()
export class ChartistJsService {

  private _data = {
    simpleLineOptions: {
      color: this._baConfig.get().colors.defaultText,
      fullWidth: true,
      height: '300px',
      chartPadding: {
        right: 40
      }
    },
    simpleLineData: {
      labels: ['Jeunesse', 'Femmes', 'Les immigrants', 'Autochtones', 'Total'],
      series: [
        [0, 10, 0, 0, 0],
      
      ]
    },
    areaLineData: {
      labels: ['Jeunesse', 'Femmes', 'Les immigrants', 'Autochtones', 'Total'],
      series: [
        [689, 11, 0, 0, 2],
      ]
    },
    areaLineOptions: {
      fullWidth: true,
      height: '300px',
      low: 0,
      showArea: true
    },
    biLineData: {
      labels: ['Youth', 'Women', 'Immigrants', 'Aboriginals', 'Total'],
      series: [
        [689, 11, 0, 0, 2]
        
      ]
    },

    biLineOptions: {
      height: '300px',
      high: 3,
      low: -3,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: {
        showGrid: false
      }
    },
    simpleBarData: {
      labels: ['Youth', 'Women', 'Immigrants', 'Aboriginals', 'Total'],
      series: [
        [15, 24, 43, 27, 5, 10, 23, 44, 68, 50, 26, 8],
        [13, 22, 49, 22, 4, 6, 24, 46, 57, 48, 22, 4]
      ]
    },
    simpleBarOptions: {
      fullWidth: true,
      height: '300px'
    },
    multiBarData: {
      labels: ['Communauté', 'Municipal', 'Gouvernement provincial', 'Privé'],
      series: [
        [5, 4, 3, 7],
        [3, 2, 9, 5],
        [1, 5, 8, 4],
        [2, 3, 4, 6],
        [4, 1, 2, 1]
      ]
    },
    multiBarOptions: {
      fullWidth: true,
      height: '300px',
      stackBars: true,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value.split(/\s+/).map(function (word) {
            return word[0];
          }).join('');
        }
      },
      axisY: {
        offset: 20
      }
    },
    multiBarResponsive: [
      ['screen and (min-width: 400px)', {
        reverseData: true,
        horizontalBars: true,
        axisX: {
          labelInterpolationFnc: (n) => n
        },
        axisY: {
          offset: 60
        }
      }],
      ['screen and (min-width: 700px)', {
        stackBars: false,
        reverseData: false,
        horizontalBars: false,
        seriesBarDistance: 15
      }]
    ],
    stackedBarData: {
      labels: ['Infrastructure', 'santé et bien-être', 'admin publique', 'Federal government', 'Private'],
      series: [
        [82850, 25000, 2730940, 2236298, 2790950]
       
      ]
    },
    stackedBarOptions: {
      fullWidth: true,
      height: '300px',
      stackBars: true,
      axisY: {
        labelInterpolationFnc: function (value) {
          return (value / 1000) + 'k';
        }
      }
    },
    simplePieData: {
      series: [5, 3, 4]
    },
    simplePieOptions: {
      fullWidth: true,
      height: '300px',
      weight: '300px',
      labelInterpolationFnc: function (value) {
        return Math.round(value / 12 * 100) + '%';
      }
    },
    labelsPieData: {
      labels: ['Infrastructure', 'Apples', 'Grapes'],
      series: [20, 15, 40]
    },
    labelsPieOptions: {
      fullWidth: true,
      height: '300px',
      weight: '300px',
      labelDirection: 'explode',
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    },
    simpleDonutData: {
      labels: ['Infrastructure', 'santé et bien-être', 'Dépenses réelles'],
      series: [20, 15, 40]
    },
    simpleDonutOptions: {
      fullWidth: true,
      donut: true,
      height: '300px',
      weight: '300px',
      labelDirection: 'explode',
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  };

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  public getAll() {
    return this._data;
  }

  public getResponsive(padding, offset) {
    return [
      ['screen and (min-width: 1550px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 1200px)', {
        chartPadding: padding,
        labelOffset: offset,
        labelDirection: 'explode',
        labelInterpolationFnc: function (value) {
          return value;
        }
      }],
      ['screen and (max-width: 600px)', {
        chartPadding: 0,
        labelOffset: 0,
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }]
    ];
  }
}
