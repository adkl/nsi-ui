export class StorageTypeModel {
    public id: number;
    public isActive: boolean;
    public name: string;
    public code: string;
  
    
    constructor(id: number, isActive: boolean, name: string, code: string) {

        this.id = id;
        this.isActive = isActive;
        this.name = name; 
        this.code = code;
  
    }

  }