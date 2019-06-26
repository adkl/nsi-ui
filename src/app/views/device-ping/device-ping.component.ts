import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { DevicePropertyValueModalComponent } from './device-property-values-modal/device-property-values-modal.component';
import { FilterCriteria } from '../../shared/models/filter-criteria';
import { DevicePingModel } from './shared/device-ping.model';
import { DevicePingService } from './device-ping.service';
import { Paging } from '../../shared/models/paging';


@Component({
  templateUrl: 'device-ping.component.html',
  styleUrls: ['./device-ping.component.css']
})
export class DevicePingComponent implements OnInit, OnDestroy {
  private devicePingSub: Subscription;
  public logs: DevicePingModel[];
  public filterColumnsOptions = [];
  public selectedFilterColumns = [];
  public dropdownSettings = {};
  public pagingConfig = new Paging(1, 0, 10, 0);
  public formGroup: FormGroup;
  public isLoading: boolean;

  get fieldsFormArray() {
    return <FormArray>this.formGroup.get('filterColumns');
  }

  constructor(
    private fb: FormBuilder,
    private devicePingService: DevicePingService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      filterColumns: this.fb.array([])
    });

    this.isLoading = true;
    this.devicePingSub = this.devicePingService.search([], [], this.pagingConfig)
      .subscribe(data => {
        this.logs = data.data;

        if (data.paging) {
          data.paging.page = data.paging.page ? data.paging.page : 1;
          this.pagingConfig = new Paging(data.paging.page, data.paging.totalRecords, data.paging.recordsPerPage, data.paging.pages);
        }
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      });

    this.selectedFilterColumns = [];

    this.filterColumnsOptions = [
      { item_id: 'dateCreated', item_text: 'Date created' },
      { item_id: 'deviceName', item_text: 'Device name' },
      { item_id: 'deviceStatus', item_text: 'Device status' },
      { item_id: 'actionName', item_text: 'Action name' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      allowSearchFilter: true,
      enableCheckAll: false
    };
  }

  ngOnDestroy() {
    if (this.devicePingSub) {
      this.devicePingSub.unsubscribe();
    }
  }

  showDevicePropertyValues(log: DevicePingModel) {
    const modalRef = this.modalService.open(
      DevicePropertyValueModalComponent,
      { size: 'lg', centered: true }
    );

    modalRef.componentInstance.devicePropertyValues = log.devicePropertyValues;
  }

  loadPage(page) {
    if (page != null && page > 0) {
      this.pagingConfig.page = page;
      this.isLoading = true;
      this.devicePingService.search([], [], this.pagingConfig)
        .subscribe(data => {
          this.logs = data.data;

          if (data.paging) {
            data.paging.page = data.paging.page ? data.paging.page : 1;
            this.pagingConfig = new Paging(data.paging.page, data.paging.totalRecords, data.paging.recordsPerPage, data.paging.pages);
          }

          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
        });
    }
  }

  filterLogs() {
    const filterCriteria = [];
    const filterValues = this.formGroup.get('filterColumns').value;

    if (this.selectedFilterColumns && this.selectedFilterColumns.length > 0 && filterValues) {
      filterValues.forEach(filterValue => {
        if (filterValue.value) {
          filterCriteria.push(new FilterCriteria(filterValue.columnName, filterValue.value, false));
        }
      });
    }

    this.isLoading = true;
    this.devicePingService.search(filterCriteria, [], this.pagingConfig)
      .subscribe(data => {
        this.logs = data.data;

        if (data.paging) {
          data.paging.page = data.paging.page ? data.paging.page : 1;
          this.pagingConfig = new Paging(data.paging.page, data.paging.totalRecords, data.paging.recordsPerPage, data.paging.pages);
        }
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      });
  }

  clearFilters() {
    this.selectedFilterColumns = [];
    const filterColumns = this.formGroup.get('filterColumns').value;
    let i = filterColumns.length;

    while (i >= 0) {
      this.fieldsFormArray.removeAt(i);
      i -= 1;
    }

    this.filterLogs();
  }

  filterColumnSelected(filterColumn) {
    this.generateFilterFormGroup(filterColumn);
  }

  filterColumnDeSelected(filterColumn) {
    const index = this.fieldsFormArray.controls.findIndex(x => x.get('columnName').value === filterColumn.item_id);
    this.removeFilterFormGroupAt(index);
    this.filterLogs();
  }

  removeFilterFormGroupAt(index: number) {
    this.fieldsFormArray.removeAt(index);
  }

  generateFilterFormGroup(filterColumn) {
    this.fieldsFormArray.push(this.fb.group({
      columnName: [filterColumn.item_id],
      columnText: [filterColumn.item_text],
      value: [null]
    }));
  }
}
