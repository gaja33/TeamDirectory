import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Directories } from "../models/directories";

@Injectable({
  providedIn: "root",
})
export class DirectoriesService {
  API_URL = "https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098";

  constructor(private http: HttpClient) {}

  getDirectories(): Observable<Directories[]> {
    let url = this.API_URL;
    const config = {
      headers: new HttpHeaders().set("Content-type", "application/json"),
    };
    return <Observable<Directories[]>>this.http.get(url, config);
  }
}
