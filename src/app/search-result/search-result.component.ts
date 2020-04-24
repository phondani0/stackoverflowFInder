import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnInit {

  @Input() searchResult: any;
  @Output() pageChanged = new EventEmitter();

  page: number = 1;
  total: number;

  constructor () { }

  ngOnInit(): void {
  }

  pageChange(page) {
    console.log(page);
    this.pageChanged.emit({ page });
  }

}
