import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { AddEditRuleComponent } from '../add-edit-rule/add-edit-rule.component';
import { SelectDropDownModule } from 'ngx-select-dropdown/dist/ngx-select-dropdown.module';
import { Device } from '../../models/Device';
import { DeviceService } from '../../services/device/device.service';
import { Rule } from '../../models/Rule';
import { RuleService } from '../../services/rule/rule.service';

@Component({
  selector: 'app-view-rules',
  templateUrl: './view-rules.component.html'
})
export class ViewRulesComponent implements OnInit {
  @ViewChild('addRuleModal') addRuleModal: AddEditRuleComponent;
  @ViewChild('deviceSelect') deviceSelect: SelectDropDownModule;

  devices: Device[] = [];
  rules: Rule[] = [];
  loading = true;
  currentPage = 1;
  totalPages = 1;
  filterByDeviceId: number = null;

  // device filter config
  selectionConfig = {
    displayKey: 'name',
    search: true,
    placeholder: 'Filter by Device',
  };

  selectedDevices: Array<any>;

  constructor(
    private deviceService: DeviceService,
    private ruleService: RuleService
  ) { }

  ngOnInit() {
    this.deviceService.devices.subscribe(devices => this.devices = devices);

    this.deviceService.fetchAll();

    this.refreshRules();
  }

  loadAddRuleModal() {
    this.addRuleModal.openModal();
  }

  deleteRule(id) {
    this.ruleService.deleteById(id).subscribe(() => this.refreshRules());
  }

  handleNewRule() {
    this.refreshRules();
  }

  refreshRules() {
    this.loading = true;

    this
      .ruleService
      .all(this.currentPage, this.filterByDeviceId)
      .subscribe((response: any) => {
        this.rules = response.data;
        this.loading = false;
        this.totalPages = response.paging.pages;
      });
  }

  filter(e) {
    this.currentPage = 1;
    this.filterByDeviceId = e.value.length === 0 ? null : e.value[0].deviceId;
    this.refreshRules();
  }

  changePage(page: number) {
    if (page >= 1) {
      this.currentPage = page;
      this.refreshRules();
    }
  }
}
