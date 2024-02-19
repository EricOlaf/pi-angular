import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ButtonComponent {
  @Input() public text: string = "" 
  @Input() public size: "small" | "large" | "xl" = "small" 
  @Input() public color: "primary" | "secondary" = "primary"  

getButtonClass(){
return {
  "button-small": this.size === "small",
  "button-large": this.size === "large",
  "button-xl": this.size === "xl",
  "button-primary-color": this.color === "primary",
  "button-secondary-color": this.color ==="secondary"
}
}
}