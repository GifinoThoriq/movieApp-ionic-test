import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getTopRatedMovies(page: number): Observable<ApiResult> {
    return this.http.get<ApiResult>(`/movie/popular?page=${page}`);
  }

  getMovieDetails(id: string) {
    return this.http.get(`/movie/${id}?`);
  }
}
