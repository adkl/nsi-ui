import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-picker',
  templateUrl: './filter-picker.component.html',
  styleUrls: ['./filter-picker.component.scss']
})
export class FilterPickerComponent implements OnInit {

  dateFrom = new Date();
  dateTo = new Date();
  tenant = null;

  tenants = [
    {
      id: 0,
      description: 'prvi'
    },
    {
      id: 1,
      description: 'drugi'
    },
    {
      id: 2,
      description: 'treci'
    },
    {
      id: 3,
      description: 'cetvrti'
    }
  ];

  @Output() apply = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.dateFrom.setDate(this.dateFrom.getDate()-10);

    this.tenant = 0;
  }

  public getFilterValues()  {
    return {
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
      tenant: this.tenant
    };
  }

  submitForm()  {
    this.apply.emit(this.getFilterValues());
  }

}
