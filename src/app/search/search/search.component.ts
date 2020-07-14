import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/shared/page.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchString: string = "";
  constructor(private pageSvc: PageService) { }

  ngOnInit(): void {
    this.searchString = '';
  }

  makeGeocodingCall() {
    console.log(this.searchString)
    this.pageSvc.makeGeocodingSearch(encodeURI(this.searchString));
  }

}
  