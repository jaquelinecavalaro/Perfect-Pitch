import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pitch } from 'src/app/model/Pitch';
import { PitchServiceService } from 'src/app/service/pitch-service.service';

@Component({
  selector: 'app-pitch-edit',
  templateUrl: './pitch-edit.component.html',
  styleUrls: ['./pitch-edit.component.scss']
})
export class PitchEditComponent implements OnInit {
  
  pitch:Pitch = new Pitch()

  constructor(
    private pitchService:PitchServiceService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findByIdPitch(id)
  }

  findByIdPitch(id:number){
    this.pitchService.getByIdPitch(id).subscribe((resp:Pitch)=>{
      this.pitch = resp
    })
  }

  atualizar(){
    this.pitchService.putPitch(this.pitch).subscribe((resp:Pitch)=>{
      this.pitch= resp
      alert('Pitch atualizado com sucesso!')
      this.router.navigate(['/speech-to-text'])
    })
  }


}
