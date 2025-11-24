import {LitElement, html, css } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { icons } from './icons';

@customElement('mtm-icon')

export class Icon extends LitElement {
  static override styles = css`
    :host{
        display:inline-block;
    }
    :host([color="default"]) .icon {
        color: var(--mtm-color-primary-100);
    }
    :host([color="white"]) .icon {
        color: white;
    }
    :host([color="dark"]) .icon {
        color: var(--mtm-color-text-high);
    }
    .icon{
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    svg{
        // fill: currentColor;
        display: block;
    }
  `;

  @property({ type: String }) type = '';
  @property({ type: String }) color: 'default' | 'white' | 'dark' = 'default';

  override render() {
    const svg = icons[this.type];
    if (!svg) {
      console.warn(`Icon type "${this.type}" not found.`);
      return html``; // Return empty if icon type is not found
    }
    return html`
        <div class="icon">
            ${unsafeHTML(svg)}
        </div>  
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'mtm-icon': Icon;
  }
}