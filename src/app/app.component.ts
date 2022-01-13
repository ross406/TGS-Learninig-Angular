import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'main-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public applicationTitle: string;
  public techstacknames: string[];
  public status: boolean;
  public ename: string;
  public favTechName: string;
  public personObject: Person;
  public allMyPeople: Person[];
  public searchedPersonElement: Person;

  constructor() {
    this.applicationTitle = 'We are learning how to work with Angular';
    this.techstacknames = [];
    this.status = false;
    this.ename = '';
    this.favTechName = '';
    this.personObject = new Person();
    this.allMyPeople = [
      new Person('Roshan', 21),
      new Person('Raju', 27),
      new Person('jojo', 25),
      new Person('Rohan', 26),
    ];
    this.searchedPersonElement = new Person();
  }
  public Greetings(): void {
    alert('Hello from the Greetings method');
    this.status = !this.status;
  }

  public ShowContent(): void {
    this.status = !this.status;
  }
  public AddTechName(): void {
    this.techstacknames.push(this.favTechName);
    alert('Tech Name is added');
    this.favTechName = '';
  }
  public AddData(value: string): void {
    alert('new ' + value);
  }

  public GetDetailsOfTech(mytechname: string): void {
    alert('you Want to know more about ' + mytechname);
  }
  public DisplayPersonData(): void {
    console.log(this.personObject);
  }
  public loadInformation(pInfo: Person): void {
    this.searchedPersonElement = pInfo;
  }
}
