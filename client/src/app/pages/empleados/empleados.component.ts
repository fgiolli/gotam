import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
})
export class EmpleadosComponent implements OnInit {
  empleados: any;
  index = null;
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  getIndex(emp: any) {
    this.index = emp.DNI;
    console.log(this.index)
  }

  bajaEmpleado() {
    this.httpClient.delete(`http://localhost:3000/api/empleados/${this.index}`)
    .subscribe(() => {
      this.router.navigate(['/empleados']);
    });
  }

  getEmpleados() {
    this.httpClient
      .get('http://localhost:3000/api/empleados')
      .subscribe(response => {
        console.log(response);
        this.empleados = response;
      });
    }
}
