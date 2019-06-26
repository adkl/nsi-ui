import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parameter-setting',
  templateUrl: './parameter-setting.component.html'
})
export class ParameterSettingComponent implements OnInit {
  @Input() parameter: any;

  constructor() { }

  ngOnInit() {
  }

}
