import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorService } from '../services/actor.service';
import { Actor } from '../models/actor.model';

@Component({
  selector: 'app-actor-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  actors: Actor[] = [];

  constructor(private actorService: ActorService) {}

  ngOnInit() {
    this.getActors();
  }

  getActors() {
    this.actorService.getActors().subscribe(
      (data: Actor[]) => {
        this.actors = data;
      },
      error => console.error('Error fetching actors:', error)
    );
  }
}