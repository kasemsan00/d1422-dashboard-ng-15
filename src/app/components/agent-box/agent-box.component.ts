import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agent-box',
  templateUrl: './agent-box.component.html',
  styleUrls: ['./agent-box.component.scss'],
})
export class AgentBoxComponent implements OnInit {
  constructor() {}

  display_name: any;

  @Input() user?: any;
  @Input() display_calltime?: any;
  @Input() agent_status_text?: any;
  @Input() agent_length?: any;

  ngOnInit(): void {
    let display_name = localStorage.getItem('display_name');
    if (display_name == 'name') {
      this.display_name = 'name';
    }
    if (display_name == 'username') {
      this.display_name = 'username';
    }
  }
}
