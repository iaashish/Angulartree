import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TreeHierarchy} from "./TreeHierarchy/app.treehierarchy";
import {TreeView} from "./TreeView/app.treeview";
import {TreeDetails} from "./DetailsView/app.details";

@NgModule({
  declarations: [
    AppComponent,
    TreeHierarchy,
    TreeDetails,
    TreeView
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
