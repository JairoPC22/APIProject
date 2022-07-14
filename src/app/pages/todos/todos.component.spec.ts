import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponents} from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponents;
  let fixture: ComponentFixture<TodosComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
