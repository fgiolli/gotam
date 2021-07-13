import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alta-empleado',
  templateUrl: './alta-empleado.component.html',
  styleUrls: ['./alta-empleado.component.scss'],
})
export class AltaEmpleadoComponent implements OnInit {
  areas: any;
  onSubmit(data: any){
    this.httpClient.post('http://localhost:3000/api/empleados', data)
    .subscribe((res)=> {
    })
  }
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getAreas();
  }

  getAreas() {
    this.httpClient
      .get('http://localhost:3000/api/areas')
      .subscribe((response) => {
        console.log(response);
        this.areas = response;
      });
  }
}
