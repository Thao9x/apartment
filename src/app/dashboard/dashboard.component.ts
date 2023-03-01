import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public basicData: any;
  public basicOptions: any;
  public data: any;
  public chartOptions: any;
  public products: any[] = [];
  constructor() { }

  ngOnInit() {
    let object: any = {};
    object["userName"] = "Bamboo Watch";
    object["date"] = "12/02/2015";
    object["seniority"] = "5";
    object["position"] = "Quản lý";
    this.products.push(object);
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40, 57, 45, 50, 32, 66]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#FFA726',
          data: [28, 48, 40, 19, 86, 27, 90, 57, 45, 50, 32, 66]
        }
      ]
    };

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D"
          ]
        }
      ]
    };
  }

}
