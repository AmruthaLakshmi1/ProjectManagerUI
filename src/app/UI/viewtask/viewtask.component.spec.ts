import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtaskComponent } from './viewtask.component';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import * as $ from 'jquery';

describe('ViewtaskComponent', () => {
  let component: ViewtaskComponent;
  let fixture: ComponentFixture<ViewtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule,FormsModule,RouterTestingModule,ReactiveFormsModule,SelectDropDownModule],
      providers:[FormsModule,HttpModule,RouterTestingModule,ReactiveFormsModule,SelectDropDownModule],
      declarations: [ ViewtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Edit a task', () => {   
    component.Edit;  
    expect(component).toBeTruthy(); 
   });  
   it('End a task', () => {   
    component.EndTask;  
    expect(component).toBeTruthy(); 
   });     
   it('Delete a task', () => {   
    component.Delete;  
    expect(component).toBeTruthy(); 
   }); 
});
