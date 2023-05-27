import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/api/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  usuarios = new Array();

  constructor(private api:UsuariosService) { }

  ngOnInit(): void {
    this.api.getUsuarios().subscribe((data:any)=>{
      console.log(data);
      this.usuarios = data;
    });
  }

}
