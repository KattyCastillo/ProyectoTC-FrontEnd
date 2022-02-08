import { Component, OnInit } from '@angular/core';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import { ToastrService } from 'ngx-toastr'; //para las ntificaciones
import { TarjetaCreditoComponent } from '../tarjeta-credito/tarjeta-credito.component';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';

@Component({
  selector: 'app-list-tarjeta-credito',
  templateUrl: './list-tarjeta-credito.component.html',
  styleUrls: ['./list-tarjeta-credito.component.scss']
})
export class ListTarjetaCreditoComponent implements OnInit {

  constructor(public tarjetaService: TarjetaService, public  toastr: ToastrService) { }

  ngOnInit(): void {
    this.tarjetaService.obtenerTarjetas();
  }

  eliminarTarjeta(id: number){
   if(confirm("Esta seguro que desea eliminar el registro?")){
     this.tarjetaService.eliminarTarjetas(id).subscribe(data =>{
       this.toastr.warning('Registro eliminado', 'La tarjeta fue eliminada');
       this.tarjetaService.obtenerTarjetas();
     })
   }
  }

  editar(tarjeta: TarjetaCredito){
    this.tarjetaService.actualizar(tarjeta)
  }
}
