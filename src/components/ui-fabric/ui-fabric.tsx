import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'icons-ui-fabric',
  styleUrls: ['ui-fabric.css'],
  shadow: false
})
export class UiFabric {

  render() {
    return (
      <Host>
        <slot>
          <i class="ms-Icon ms-Icon--PageLink"></i>
          <i class="ms-Icon ms-Icon--ContactCard"></i>
          <i class="ms-Icon ms-Icon--WindowsLogo"></i>
          <i class="ms-Icon ms-Icon--Telemarketer"></i>
        </slot>
      </Host>
    );
  }

}
