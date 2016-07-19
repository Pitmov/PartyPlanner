import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';


@Component({
  selector: 'party-stats',
  templateUrl: './app/components/party-stats.component.html',
})
export class PartyStatsComponent {
  @Input() invited;
  @Input() attending;
  @Input() guests;
  @Input() attendingPercent;
}
