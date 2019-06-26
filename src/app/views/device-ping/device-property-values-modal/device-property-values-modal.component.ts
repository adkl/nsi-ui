import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DevicePropertyValue } from '../shared/device-property-value.model';

@Component({
    selector: 'app-device-property-value-modal',
    templateUrl: './device-property-values-modal.component.html',
    styleUrls: ['./../device-ping.component.css']
})
export class DevicePropertyValueModalComponent {
    p: number = 1;

    @Input()
    public devicePropertyValues: DevicePropertyValue[];

    constructor(public activeModal: NgbActiveModal) { }

    close() {
        this.activeModal.close();
    }
}