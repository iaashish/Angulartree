/**
 * Created by ippil on 1/2/2017.
 */
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable, Subject} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import {SharedData} from "../shared/app.sharedData";
@Injectable()
export class TreeService {

  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {

  }

  private shareddata: SharedData;
  private subject: Subject<SharedData> = new Subject<SharedData>();

  getshareddata(): Observable<SharedData> {
    return this.subject.asObservable();
  }

  setshareddata(value: SharedData) {
    this.shareddata = value;
    this.subject.next(value);
  }

  loadTreeData() {
    return this.http.get('http://localhost:3000/hierarchical')
      .map(res => res.json());
  }

  updateTreeData(id, data) {

    var json = JSON.stringify({"data": data});

    this.http.put('http://localhost:3000/hierarchical/' + id, json, this.options)
      .subscribe(
        () => {
        },
        err => console.log(err)
      );
  }

  insertnewdata() {
    var json = JSON.stringify({"data": [{"first_name":"Test 1","last_name":"Test 2","title": "Test 1 Test 2", "nodes": []}]});
  var a = new Object({"data": [{"first_name":"Test 1","last_name":"Test 2","title": "Test 1 Test 2", "nodes": []}]});
    this.http.post('http://localhost:3000/hierarchical', json, this.options)
      .subscribe(
        () => {
        },
        err => console.error(err)
      );

  }

}
