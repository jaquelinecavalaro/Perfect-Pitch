import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pitch } from '../model/Pitch';
import { PitchServiceService } from '../service/pitch-service.service';

@Component({
  selector: 'app-leitura',
  templateUrl: './leitura.component.html',
  styleUrls: ['./leitura.component.scss']
})
export class LeituraComponent implements OnInit {

  pitch: Pitch = new Pitch()


  constructor(
    private pitchService:PitchServiceService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(){
    let id = this.route.snapshot.params['id']
    this.findByIdPitch(id)
  }

  findByIdPitch(id:number){
    this.pitchService.getByIdPitch(id).subscribe((resp:Pitch)=>{
      this.pitch = resp
    })
  }


}
