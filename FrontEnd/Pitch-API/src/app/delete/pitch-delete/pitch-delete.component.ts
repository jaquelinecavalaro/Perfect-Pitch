import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pitch } from 'src/app/model/Pitch';
import { PitchServiceService } from 'src/app/service/pitch-service.service';

@Component({
  selector: 'app-pitch-delete',
  templateUrl: './pitch-delete.component.html',
  styleUrls: ['./pitch-delete.component.scss']
})
export class PitchDeleteComponent implements OnInit {

  pitch:Pitch = new Pitch()
  idPitch: number

  constructor(
    private pitchService:PitchServiceService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.idPitch = this.route.snapshot.params['id']
    this.findByIdPitch(this.idPitch)
  }

  findByIdPitch(id:number){
    this.pitchService.getByIdPitch(id).subscribe((resp:Pitch)=>{
      this.pitch = resp
    })
  }

  apagar(){
  this.pitchService.deletePitch(this.idPitch).subscribe(()=>{
    alert('Pitch apagado com sucesso!')
    this.router.navigate(['/historico'])
  })
  }



}
