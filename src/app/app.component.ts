import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLoading: boolean = false;
  public url: string = "https://api.github.com/users";
  public users: any = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.isLoading = true;
    this.http.get(this.url).subscribe(response => {
      console.log(response);
      setTimeout(() => {
        this.isLoading = false;
        this.users = response;
      }, 3000);

    }, error => {
      console.log(error);
      this.isLoading = false;
    }, () => {
      console.log("Completed");
    });
  }

  public goToGithub(url: string) {
    window.open(url, '_blank');
  }
}