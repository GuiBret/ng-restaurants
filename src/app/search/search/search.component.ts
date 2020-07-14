import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageService } from 'src/app/shared/page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-location',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchString: string = "";
  changeText$: Subscription;

  constructor(private pageSvc: PageService) { }

  ngOnInit(): void {
    this.searchString = '';
    this.changeText$ = this.pageSvc.changeTextInSearchInputField.subscribe(this.changeText.bind(this));
  }

  ngOnDestroy() {
    this.changeText$.unsubscribe();
  }

  makeGeocodingCall() {
    
    this.pageSvc.makeGeocodingSearch(encodeURI(this.searchString));
  }

  changeText(newText: string) {
    this.searchString = newText;
  }

}
  