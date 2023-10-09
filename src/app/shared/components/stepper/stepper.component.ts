import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @Input() firstStepCompleted!: boolean;
  @Input() secondStepCompleted!: boolean;
  @Input() submitStep = 3;
  @Output() submitEvent = new EventEmitter();
  @Output() saveEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  confirm(): void {
    this.submitEvent.emit();
  }

  save(): void {
    this.saveEvent.emit();
  }
}
