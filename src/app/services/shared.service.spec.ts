import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';
import {Response,HttpModule} from '@angular/http';
import { Task } from '../models/task';
import { Project } from '../models/project';
import { User } from '../models/user';

describe('SharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpModule],
    providers:[SharedService,HttpModule]
  }));
  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);    
    const item:Task = {Manager:"Manager", ProjectName:"Project",TaskId:123,TaskName:'Testtask',ParentTaskName:'parenttest',TPriority:10,TStartDate:new Date(2014,4,4) ,TEndDate:new Date(2014,4,4),ProjectId:1,ParentId:1,TStatus:true,UserId:1}
    const res=service.AddTask(item); 
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);    
    const item:Project = {Manager:"Manager",ProjectId:123,ProjectName:'Testtask',PStartDate:new Date(2014,4,4) ,PEndDate:new Date(2014,4,4),PPriority:1,ManagerId:1,Nooftasks:1,completed:1,Pstatus:true}
    const res=service.Addproject(item); 
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    const service: SharedService = TestBed.get(SharedService);    
    const item:User = {UserId:123,FirstName:'Firstname',LastName:'Lastname',EmployeeId:'Emp01'}
    const res=service.AddUser(item); 
    expect(service).toBeTruthy();
  });
  it('Deleting task record',()=>{   
    const TaskId  = 8;
    const service: SharedService = TestBed.get(SharedService);    
    service.Deletetask(TaskId);
    expect(service).toBeTruthy();
  });
  it('Deleting project record',()=>{   
    const ProjectId  = 8;
    const service: SharedService = TestBed.get(SharedService);    
    service.Deleteproject(ProjectId);
    expect(service).toBeTruthy();
  });
  it('Deleting user record',()=>{   
    const UserId  = 8;
    const service: SharedService = TestBed.get(SharedService);    
    service.Deleteuser(UserId);
    expect(service).toBeTruthy();
  });
   it('Get user record',()=>{       
    const service: SharedService = TestBed.get(SharedService);    
    service.GetAllusers();
     expect(service).toBeTruthy();
   });
   it('Get project record',()=>{      
     const service: SharedService = TestBed.get(SharedService);    
     service.GetAllProjects();
     expect(service).toBeTruthy();
   });
   it('Get task record',()=>{      
     const service: SharedService = TestBed.get(SharedService);    
     service.GetAllTasks();
     expect(service).toBeTruthy();
   });
   it('Update task record',()=>{    
     const item:Task = {Manager:"Manager", ProjectName:"Project",TaskId:123,TaskName:'Testtask',ParentTaskName:'parenttest',TPriority:10,TStartDate:new Date(2014,4,4) ,TEndDate:new Date(2014,4,4),ProjectId:1,ParentId:1,TStatus:true,UserId:1}  
     const service: SharedService = TestBed.get(SharedService);    
     service.Searchtask(item.TaskId);
     expect(service).toBeTruthy();
   });
   it('Update project record',()=>{  
     const item:Project = {Manager:"Manager",ProjectId:123,ProjectName:'Testtask',PStartDate:new Date(2014,4,4) ,PEndDate:new Date(2014,4,4),PPriority:1,ManagerId:1,Nooftasks:1,completed:1,Pstatus:true}    
     const service: SharedService = TestBed.get(SharedService);    
     service.Searchproject(item.ProjectId);
     expect(service).toBeTruthy();
   });
   it('Update User record',()=>{      
     const item:User = {UserId:123,FirstName:'Firstname',LastName:'Lastname',EmployeeId:'Emp01'}
     const service: SharedService = TestBed.get(SharedService);    
     service.Searchuser(item.UserId);
     expect(service).toBeTruthy();
   });
});