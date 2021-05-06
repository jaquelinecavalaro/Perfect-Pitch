import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pitch } from '../model/Pitch';
import { PitchServiceService } from '../service/pitch-service.service';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  pitch:Pitch = new Pitch()
  listaPitchs: Pitch[]

  constructor(
    private router:Router,
    private pitchService:PitchServiceService
  ) {}

  ngOnInit() {
    this.findAllPitch()
  }

  findAllPitch(){
    this.pitchService.getAllPitch().subscribe((resp:Pitch[])=>{
      this.listaPitchs = resp
      console.log(this.listaPitchs)
    })
  }


}
