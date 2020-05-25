import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'icons-fontawesome',
  styleUrls: ['fontawesome.css'],
  assetsDirs: ['assets'],
  shadow: false
})
export class Fontawesome {

  render() {
    return (
      <Host>
        <slot>
          <i class="fab fa-adobe"></i>
          <i class="far fa-address-card"></i>
          <i class="fas fa-address-card"></i>
          <i class="fas fa-map-marked-alt"></i>
        </slot>
      </Host>
    );
  }

}
