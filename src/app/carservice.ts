import { Injectable } from '@angular/core';
import { Car } from './car';
import { Model } from './model';
import { Observable, of } from 'rxjs';
import {catchError, tap, delay, map} from 'rxjs/operators';

@Injectable()
export class CarService {

  getCars(): Observable<Car[]> {
    return of(cars).pipe(
      map(c => {
        const filteredCars: Car[] = cars;
        return filteredCars;
      })
    );
  }  

  getModels(): Observable<Model[]> {
    return of(models).pipe(
      map(c => {
        const filteredModel: Model[] = models;
        return filteredModel;
      })
    );
  }

  getFilteredModels(value?: number[]): Observable<Model[]> {
    return of(models).pipe(
      map(c => {
        if (!value) {
          return c;
        }
        const filteredModel: Model[] = [];
        value.forEach( val => {

          c.forEach(item => {
            if(item.carid == val){
              filteredModel.push(item);
            }
          });          
        });
        return filteredModel;
      })
    );
  }  
}

export const cars: Car[] = [
  {  id: 1, name: 'Audi'},
  {  id: 2, name: 'BMW'},
  {  id: 3, name: 'Honda'},
  {  id: 4, name: 'Ford'},
  {  id: 5, name: 'Mazda'},
  ];

export const models: Model[] = [
  {  id: 1, carid: 1, name: 'A4'},
  {  id: 2, carid: 1, name: 'A5'},
  {  id: 3, carid: 1, name: 'Q5'},
  {  id: 4, carid: 1, name: 'Q7'},
  {  id: 5, carid: 2, name: 'D 60'},
  {  id: 6, carid: 2, name: 'GLS 30'},
  {  id: 8, carid: 4, name: 'EcoSports'},
  {  id: 9, carid: 5, name: 'Figo'},
  {  id: 10, carid: 3, name: 'Accord'},
  {  id: 11, carid: 3, name: 'Civic'},
  {  id: 12, carid: 3, name: 'City'},
  {  id: 13, carid: 5, name: 'MUSTANG'}
  ];