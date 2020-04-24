import { Component, OnInit, EventEmitter, Output } from '@angular/core';

interface SearchParams {
  q?: string,
  page?: number,
  pageSize?: number,
  fromdate?: number,
  todate?: number,
  order?: string,
  min?: string,
  max?: string,
  sort?: string,
  accepted?: string,
  answers?: string,
  closed?: string,
  body?: string,
  migrated?: string,
  notice?: string,
  tagged?: string,
  nottagged?: string,
  title?: string,
  user?: string,
  url?: string,
  views?: string,
  wiki?: string,
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchParams: SearchParams = {};

  showAdvanceSearch: boolean;

  @Output() search = new EventEmitter();

  constructor (
  ) {
  }

  ngOnInit(): void { }

  searchBtnClickHandler() {
    // api need epoch time in seconds
    const fromDate = new Date(this.searchParams.fromdate).getTime() / 1000;
    const toDate = new Date(this.searchParams.todate).getTime() / 1000;

    if (fromDate)
      this.searchParams.fromdate = fromDate;

    if (toDate)
      this.searchParams.todate = toDate;

    console.log(fromDate, toDate);
    this.searchParams.pageSize = 20;
    this.search.emit(this.searchParams);
  }

  advanceSearchClickHandler() {
    this.showAdvanceSearch = !this.showAdvanceSearch;
  }

  resetSearchParams() {
    const q = this.searchParams.q;
    this.searchParams = {};
    this.searchParams.q = q;
    this.showAdvanceSearch = false;
  }

}
