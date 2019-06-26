export class DownloadInfo {
    
    public id: number;
    public pathToSave: string;

    constructor(id?:number, pathToSave?:string){
        this.id = id;
        this.pathToSave = pathToSave;
    }

}