import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { CarService } from '../carservice';
import { Model } from '../model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private carService: CarService) {}

  transform(value: any, filterTerm: number): Observable<Model[]> {
    debugger;
    //return this.carService.getModels(filterTerm);
    return null;
  }
}
