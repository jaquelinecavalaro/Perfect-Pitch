import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pitch } from '../model/Pitch';

@Injectable({
  providedIn: 'root'
})
export class PitchServiceService {

  constructor(private http:HttpClient) { }
  token = {headers:new HttpHeaders().set('Authorization', environment.token)}

getAllPitch():Observable<Pitch[]>{
return this.http.get<Pitch[]>('http://localhost:8080/pitch',this.token)
}

getByIdPitch(id:number):Observable<Pitch>{
  return this.http.get<Pitch>(`http://localhost:8080/pitch/${id}`,this.token)
}

}
