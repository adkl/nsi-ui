export class NotificationModel {
  public id: number;
  public seen: boolean;
  public title: string;
  public status: string;
  public content: string;
  public dateSeen: string;
  public tenantId: number;
  public externalID: string;
  public dateCreated: string;
  public dateModified: string;
  public notificationId: number;
  public notificationStatusId: number;
  public notificationTypeId: number;


  constructor(id: number, title: string, status: string, content: string,
              tenantId: number, externalID: string, dateCreated: string,
              dateModified: string, notificationTypeId: number,
              notificationStatusId: number, seen: boolean, dateSeen: string,
              notificationId: number) {
    this.id = id;
    this.seen = seen;
    this.title = title;
    this.status = status;
    this.content = content;
    this.dateSeen = dateSeen;
    this.tenantId = tenantId;
    this.externalID = externalID;
    this.dateCreated = dateCreated;
    this.dateModified = dateModified;
    this.notificationId = notificationId;
    this.notificationTypeId = notificationTypeId;
    this.notificationStatusId = notificationStatusId;
  }
}
