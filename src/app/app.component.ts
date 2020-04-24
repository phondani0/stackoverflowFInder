import { Component, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  searchResult: any;
  params: any;

  @ViewChild('search') search: SearchComponent;

  constructor (
    public api: ApiService
  ) {
  }

  getQuestions(params) {
    this.api.getQuestions(params).subscribe((res) => {
      console.log(res);
      this.searchResult = res;
      this.search.resetSearchParams();
    });
  }

  searchHandler(params) {
    console.log(params);
    this.params = params;
    this.getQuestions(params);
  }

  pageChanged(e) {
    console.log(e.page);
    if (this.searchResult.has_more === true) {
      this.params.page = e.page;
      this.getQuestions(this.params);
    }
  }
}

