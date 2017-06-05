import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-table-test',
  styles: [],
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
export class SmartTableTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  settings = {
      columns: {
          id: {
              title: 'ID'
          },
          name: {
              title: 'Full Name'
          },
          username: {
              title: 'User Name'
          },
          email: {
              title: 'Email'
          }
      }
  };

  data = [
      {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz"
      },
      // ... other rows here
      {
          id: 11,
          name: "Nicholas DuBuque",
          username: "Nicholas.Stanton",
          email: "Rey.Padberg@rosamond.biz"
      }
  ];
}
