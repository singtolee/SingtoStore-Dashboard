export class PrdImg{
  public img:File;
  public url:string='';
  public isUploading:boolean=false;
  public progress:number=0;
  public constructor(file:File){
    this.img=file;
  }
}
