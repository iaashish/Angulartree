/**
 * Created by ippil on 1/2/2017.
 */
import {Component} from "@angular/core";
import {Input} from "@angular/core/src/metadata/directives";
@Component({
  selector: 'tree-details',
  templateUrl: 'app/DetailsView/app.details.html'
})

export class TreeDetails {
  @Input() details;

}

