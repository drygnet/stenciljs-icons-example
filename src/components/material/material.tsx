import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'icons-material',
  styleUrls: [
    'material.css', // this is just the compnents css
  ],
  shadow: false
})
export class Material {

  render() {
    return (
      <Host>
        <slot>
          <i class="material-icons">face</i>
          <i class="material-icons">important_devices</i>
          <i class="material-icons">backup</i>
          <i class="material-icons">credit_card</i>
        </slot>
      </Host>
    );
  }

}
