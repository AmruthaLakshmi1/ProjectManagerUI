import { Injectable } from '@angular/core';
import{Http,Response} from '@angular/http';
import {Observable, BehaviorSubject} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from '../models/user';
import { Project } from '../models/project';
import { Task } from '../models/task';
import { Parenttask } from '../models/parenttask';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    // Getallusers:string='http://localhost:53694/Getallusers/';
    // Getallprojects:string='http://localhost:53694/Getallprojects/';
    // Getalltasks:string='http://localhost:53694/Getalltasks/';
    // Getallparenttasks:string='http://localhost:53694/GetallParenttask/';
    // Getbyuserid:String='http://localhost:53694/getbyuserid';
    // Getbyprojectid:String='http://localhost:53694/getbyprojectid';
    // Getbytaskid:String='http://localhost:53694/getbytaskid';
    // updateuserbyid:String='http://localhost:53694/updatebyuserid';
    // updatetaskbyid:String='http://localhost:53694/updatebytaskid';
    // updateprojectbyid:String='http://localhost:53694/updatebyprojectid';
    // Addnewuser:string='http://localhost:53694/adduser/';
    // Addnewproject:string='http://localhost:53694/addproject/';
    // Addnewtask:string='http://localhost:53694/addtask/';
    // Addnewparenttask:string='http://localhost:53694/Addparenttask/';
    // Deleteuserrecord:string='http://localhost:53694/Deleteuser'; 
    // Deleteprojectrecord:string='http://localhost:53694/Deleteproject';
    // Deletetaskrecord:string='http://localhost:53694/Deletetask';    
    // Updateendrecord:string='http://localhost:53694/Endtask';
    // Updatesuspendrecord:string='http://localhost:53694/suspendprojectbyid'; 
    Getallusers:string='http://localhost/ProjectManagerAPI/Getallusers/';
    Getallprojects:string='http://localhost/ProjectManagerAPI/Getallprojects/';
    Getalltasks:string='http://localhost/ProjectManagerAPI/Getalltasks/';
    Getallparenttasks:string='http://localhost/ProjectManagerAPI/GetallParenttask/';
    Getbyuserid:String='http://localhost/ProjectManagerAPI/getbyuserid';
    Getbyprojectid:String='http://localhost/ProjectManagerAPI/getbyprojectid';
    Getbytaskid:String='http://localhost/ProjectManagerAPI/getbytaskid';
    updateuserbyid:String='http://localhost/ProjectManagerAPI/updatebyuserid';
    updatetaskbyid:String='http://localhost/ProjectManagerAPI/updatebytaskid';
    updateprojectbyid:String='http://localhost/ProjectManagerAPI/updatebyprojectid';
    Addnewuser:string='http://localhost/ProjectManagerAPI/adduser/';
    Addnewproject:string='http://localhost/ProjectManagerAPI/addproject/';
    Addnewtask:string='http://localhost/ProjectManagerAPI/addtask/';
    Addnewparenttask:string='http://localhost/ProjectManagerAPI/Addparenttask/';
    Deleteuserrecord:string='http://localhost/ProjectManagerAPI/Deleteuser'; 
    Deleteprojectrecord:string='http://localhost/ProjectManagerAPI/Deleteproject';
    Deletetaskrecord:string='http://localhost/ProjectManagerAPI/Deletetask';    
    Updateendrecord:string='http://localhost/ProjectManagerAPI/Endtask';
    Updatesuspendrecord:string='http://localhost/ProjectManagerAPI/suspendprojectbyid'; 
 
  // taskitem:Task[];
  // tasksubject:BehaviorSubject<Task[]>;
  taskitem:Task;
  id:number;
  tasksubject:BehaviorSubject<Task>;
  constructor(private _http:Http) {
    //this.taskitem=[];
    this.tasksubject=new BehaviorSubject(new Task());    
   // this.fetchtaskfromserver(this.id);
   }
  //  fetchtaskfromserver(id:number){
  //  return this._http.get(this.Getbytaskid+"/"+id)
  //   .map((response: Response)=><Task>response.json())
  //   .subscribe(
  //     taskitem=>{
  //       this.taskitem=taskitem[id];
  //       this.tasksubject.next(this.taskitem[id]);  
  //       console.log("sub"+this.tasksubject[0].ParentId);  
  //     //  return this.tasksubject.asObservable();   
  //     }); 
  //    // return this.tasksubject;  
  //  }
  GetAllusers():Observable<User[]>
  {
    return this._http.get(this.Getallusers)
    .map((response: Response)=><User[]>response.json());
  }
  GetAllProjects():Observable<Project[]>
  {
    return this._http.get(this.Getallprojects)
    .map((response: Response)=><Project[]>response.json());
  } 
  GetAllParentTasks():Observable<Parenttask[]>
  {
    return this._http.get(this.Getallparenttasks)
    .map((response: Response)=><Parenttask[]>response.json());
  }
  GetAllTasks():Observable<Task[]>
  {
     return this._http.get(this.Getalltasks)
     .map((response: Response)=><Task[]>response.json());    
  }
   EditUser(item:User):Observable<User[]>
 {
   return this._http.put(this.updateuserbyid+"/"+item.UserId,item)
   .map((response: Response)=><User[]>response.json());
  }
  EditProject(item:Project):Observable<Project[]>
 {
   return this._http.put(this.updateprojectbyid+"/"+item.ProjectId,item)
   .map((response: Response)=><Project[]>response.json());
  }
  EditTask(item:Task):Observable<Task[]>
 {
   return this._http.put(this.updatetaskbyid+"/"+item.TaskId,item)
   .map((response: Response)=><Task[]>response.json());
  }
AddUser(item:User):Observable<any>
{
  return this._http.post(this.Addnewuser,item)
  .map((response: Response)=><any>response.json());
}
Addproject(item:Project):Observable<any>
{
  return this._http.post(this.Addnewproject,item)
  .map((response: Response)=><any>response.json());
}
AddTask(item:Task):Observable<any>
{
  return this._http.post(this.Addnewtask,item)
  .map((response: Response)=><any>response.json());
}
AddParentTask(item:Parenttask):Observable<any>
{
  return this._http.post(this.Addnewparenttask,item)
  .map((response: Response)=><any>response.json());
}
Deleteuser(Id:number){
  return this._http.delete(this.Deleteuserrecord+"/"+Id)
  .map((response: Response)=><any>response.json());
}
Deleteproject(Id:number){
  return this._http.delete(this.Deleteprojectrecord+"/"+Id)
  .map((response: Response)=><any>response.json());
}
Deletetask(Id:number){
  return this._http.delete(this.Deletetaskrecord+"/"+Id)
  .map((response: Response)=><any>response.json());
}
Search(Id:number):Observable<User>{
  return this._http.get(this.Getbyuserid+"/"+Id)
  .map((response: Response)=><User>response.json());
}
Searchproject(Id:number):Observable<Project>{
  return this._http.get(this.Getbyprojectid+"/"+Id)
  .map((response: Response)=><Project>response.json());
}
Searchuser(Id:number):Observable<User>{
  return this._http.get(this.Getbyuserid+"/"+Id)
  .map((response: Response)=><User>response.json());
}
// Searchtask(Id:number):Observable<Task>{  
//   return this._http.get(this.Getbytaskid+"/"+Id)
//     .map((response: Response)=><Task>response.json()); 
//  //return this.tasksubject;  
// }
Searchtask(Id:number):Observable<Task>{  
  return this._http.get(this.Getbytaskid+"/"+Id)
  .map((response: Response)=><Task>response.json());
   // .map(this.extractData); 
 //return this.tasksubject;  

}
// private extractData(res: Response) {
//   let body = <Task> res.json();
//   console.log("Body Data = "+body.ProjectName);
//   return body || new Task() ;
// }
EndTask(Id:Number):Observable<Task>
{
  return this._http.put(this.Updateendrecord+"/"+Id,Id)
  .map((response:Response)=><Task>response.json());
}
Suspendproject(Id:number)
{
  return this._http.put(this.Updatesuspendrecord+"/"+Id,Id)
  .map((response:Response)=><Project>response.json());  
}
}
