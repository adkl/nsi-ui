export class FileTypeModel {
    
    public id: number;
    public name: string;
    public code: string;
    public extension: string;
    public documents: Document[];

    constructor(id: number, name: string, code: string, extension: string, documents: Document[]) {
        this.id = id;
        this.name = name; 
        this.code = code;
        this.extension = extension;
        this.documents = documents;
    }

  }