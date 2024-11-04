import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private LOCATION_API_URL = 'geocoding-api.open-meteo.com';
  public options: any;

  constructor(private http: HttpClient) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.options = { headers: headers };
  }

  get(name: String): Promise<any> {
    return this.GET_query(`${this.LOCATION_API_URL}/v1/search?name=${name}&count=3`);
  }


  GET_query(url: string ) {
    return new Promise((resolve, reject) => {
      
      this.http.get(url).subscribe(
        (response: any) => {
          this.consoleLog('(GET) - ' + url + ' - SUCCESS');
          resolve(response);
        },
        (error) => {
          this.consoleLog('(GET) - ' + url + ' - ERROR');
          if (error.status === 500) {
            this.consoleLog('CODE 500 - Error message: ', error);
          } else if (error.status === 401) {
            this.consoleLog('CODE 401 - Error message: ', error);
          } else {
            this.consoleLog('Error message: ', error);
          }
          reject(error);
        }
      );
    });
  }

  consoleLog(text: string, variable?: any): void {
      console.log(`${ text } => `, variable);
  }

}
