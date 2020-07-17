import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageService } from 'src/app/shared/page.service';
import { Subscription } from 'rxjs';
import { HTTPService } from 'src/app/shared/http.service';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-location',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchString: string = "";
  changeText$: Subscription;
  options: Array<any>;
  searchCtrl = new FormControl();

  constructor(private pageSvc: PageService, private httpService: HTTPService) { }

  ngOnInit(): void {
    this.searchString = '';
    
    this.changeText$ = this.pageSvc.changeTextInSearchInputField.subscribe(this.changeText.bind(this));
    
    // this.searchCtrl.valueChanges.pipe(debounceTime(500), tap(() => {

    // }))
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

  makeSuggestionsSearch() {
    if(this.searchString.length >= 3) {
      
      this.httpService.makeSuggestionsSearch(this.searchString).subscribe((suggestionsResponse: any) => {
        this.options = suggestionsResponse;
      });
    }
  }

}
  