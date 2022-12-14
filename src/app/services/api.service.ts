import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFilms(){
    return this.http.get('https://swapi.dev/api/films');
  }

  getFilm(id){
    return this.http.get(`https://swapi.dev/api/films/${id}`);
  }
  getSpecies(){
    return this.http.get('https://swapi.dev/api/species');
  }

  getSpece(id){
    return this.http.get(`https://swapi.dev/api/species/${id}`);
  }
  getStarships(){
    return this.http.get('https://swapi.dev/api/starships');
  }

  getStarship(id){
    return this.http.get(`https://swapi.dev/api/starships/${id}`);
  }

}
