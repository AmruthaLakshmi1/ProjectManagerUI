import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectComponent } from './addproject.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import * as $ from 'jquery';
import { Project } from 'src/app/models/project';

describe('AddprojectComponent', () => {
  let component: AddprojectComponent;
  let fixture: ComponentFixture<AddprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule,FormsModule,RouterTestingModule,SelectDropDownModule,ReactiveFormsModule],
      providers:[FormsModule,HttpModule,RouterTestingModule,SelectDropDownModule,ReactiveFormsModule],
      declarations: [ AddprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Add a project', () => {
    const item:Project = {ProjectId:123,ProjectName:'Testtask',PStartDate:new Date(2014,4,4) ,PEndDate:new Date(2014,4,4),PPriority:1,ManagerId:1,Nooftasks:1,completed:1,Pstatus:true}
    component.Add();  
    expect(component).toBeTruthy(); 
   });
});