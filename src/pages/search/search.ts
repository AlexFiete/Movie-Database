import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  public movies: any;

  public searchText: string= "";

  public onSearchInput() {


    let url = "http://www.omdbapi.com/?s=" + this.searchText + "&apikey=be7f04c7";

   this.http.get(url).subscribe(data => this.movies = (JSON.stringify(Search));
  

  }

  constructor(private http: HttpClient) { 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
