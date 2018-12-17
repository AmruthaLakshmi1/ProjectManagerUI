import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtaskComponent } from './addtask.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import{Routes,RouterModule} from '@angular/router';
//declare var $:any;
import * as $ from 'jquery';
import { Task } from 'src/app/models/task';

describe('AddtaskComponent', () => {
  let component: AddtaskComponent;
  let fixture: ComponentFixture<AddtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterModule,ReactiveFormsModule,HttpModule,FormsModule,RouterTestingModule,SelectDropDownModule],
      providers:[FormsModule,HttpModule,RouterTestingModule,SelectDropDownModule],
      declarations: [ AddtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {  
    expect(component).toBeTruthy();
  });
  it('Add a task', () => {
    const item:Task = {Manager:"Manager", ProjectName:"Project",TaskId:123,TaskName:'Testtask',ParentTaskName:'parenttest',TPriority:10,TStartDate:new Date(2014,4,4) ,TEndDate:new Date(2014,4,4),ProjectId:1,ParentId:1,TStatus:true,UserId:1}
    component.Add();  
    expect(component).toBeTruthy(); 
   });
   it('Add Task component',()=>{
    let task1=Task;
    component.Add();
    expect(component).toBeTruthy();
   });
   it('Update Task component',()=>{    
    component.Update();
    expect(component).toBeTruthy();
   });         
});
