import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Frais administratifs',
        stats: '5000',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Frais de projet',
        stats: '$ 89,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Active Users',
        stats: '178,391',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Returned',
        stats: '32,592',
        icon: 'refresh',
      }
    ];
  }
}
