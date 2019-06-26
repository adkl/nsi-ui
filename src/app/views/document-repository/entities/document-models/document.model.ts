export class Document {
    
    public documentId: number;
    public name: string;
    public path: string;
    public fileSize: string;
    public externalId: string;
    public locationExternalId : string;
    public dateCreated: string;
    public storageTypeId: number;
    public fileTypeId: number;
    
    constructor(documentId?: number, name?: string, path?: string, fileSize?: string,
                externalId?: string, locationExternalId? : string, dateCreated?: string,
                storageTypeId?: number, fileTypeId?: number) {

        this.documentId = documentId;
        this.name = name; 
        this.path = path;
        this.fileSize = fileSize;
        this.externalId = externalId;
        this.locationExternalId = locationExternalId;
        this.dateCreated = dateCreated;
        this.storageTypeId = storageTypeId;
        this.fileTypeId = fileTypeId;
    }

  }
  