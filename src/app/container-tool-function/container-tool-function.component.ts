import { Component, Input, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-container-tool-function',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './container-tool-function.component.html',
  styleUrls: ['./container-tool-function.component.scss']
})
export class ContainerToolFunctionComponent {
  private router = inject(Router);

  @Input() toolFunctionName: string = "";
  @Input() toolFunctionDescription: string = "";
  @Input() toolImage : string = "";
}
