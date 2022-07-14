import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponents} from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponents;
  let fixture: ComponentFixture<UsersComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
