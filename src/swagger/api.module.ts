import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { ActionService } from './api/action.service';
import { AttachmentService } from './api/attachment.service';
import { DeviceService } from './api/device.service';
import { DevicePingService } from './api/devicePing.service';
import { DeviceTypeService } from './api/deviceType.service';
import { DocumentService } from './api/document.service';
import { DocumentGeneratorService } from './api/documentGenerator.service';
import { EmailMessageService } from './api/emailMessage.service';
import { EmailRecipientService } from './api/emailRecipient.service';
import { EmailRecipientTypeService } from './api/emailRecipientType.service';
import { FakePingService } from './api/fakePing.service';
import { FileTypeService } from './api/fileType.service';
import { IncidentService } from './api/incident.service';
import { IncidentPriorityService } from './api/incidentPriority.service';
import { IncidentSettlementService } from './api/incidentSettlement.service';
import { IncidentStatusService } from './api/incidentStatus.service';
import { IncidentTypeService } from './api/incidentType.service';
import { IncidentWorkOrderService } from './api/incidentWorkOrder.service';
import { LanguageService } from './api/language.service';
import { ModuleService } from './api/module.service';
import { NotificationService } from './api/notification.service';
import { NotificationStatusService } from './api/notificationStatus.service';
import { NotificationTypeService } from './api/notificationType.service';
import { NotificationUserService } from './api/notificationUser.service';
import { PermissionService } from './api/permission.service';
import { PropertyService } from './api/property.service';
import { ReportingService } from './api/reporting.service';
import { RoleService } from './api/role.service';
import { RoleMemberService } from './api/roleMember.service';
import { RolePermissionService } from './api/rolePermission.service';
import { RuleService } from './api/rule.service';
import { SmsService } from './api/sms.service';
import { StorageTypeService } from './api/storageType.service';
import { TemplateManagementService } from './api/templateManagement.service';
import { TenantService } from './api/tenant.service';
import { TestService } from './api/test.service';
import { UserService } from './api/user.service';
import { WebNotificationService } from './api/webNotification.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    ActionService,
    AttachmentService,
    DeviceService,
    DevicePingService,
    DeviceTypeService,
    DocumentService,
    DocumentGeneratorService,
    EmailMessageService,
    EmailRecipientService,
    EmailRecipientTypeService,
    FakePingService,
    FileTypeService,
    IncidentService,
    IncidentPriorityService,
    IncidentSettlementService,
    IncidentStatusService,
    IncidentTypeService,
    IncidentWorkOrderService,
    LanguageService,
    ModuleService,
    NotificationService,
    NotificationStatusService,
    NotificationTypeService,
    NotificationUserService,
    PermissionService,
    PropertyService,
    ReportingService,
    RoleService,
    RoleMemberService,
    RolePermissionService,
    RuleService,
    SmsService,
    StorageTypeService,
    TemplateManagementService,
    TenantService,
    TestService,
    UserService,
    WebNotificationService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
