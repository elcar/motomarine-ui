import { LitElement, html, css, unsafeCSS} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { breakpoints } from '../../breakpoints';

@customElement('mtm-footer')
export class SiteFooter extends LitElement {

  static override styles = css`
    :host{
        background: var(--mtm-color-surface-300);
        display:block;
        border-top: 8px solid var(--mtm-color-primary-100);
        padding-block: 2rem;
        margin-top: 4rem;
    }
    
    :host *{
        box-sizing: border-box;
    }
    
    ::slotted([slot="logo"]){
        height: 40px;
        width: auto;
    }

  `;


  @property() company= '';
  @property() address= '';
  @property() location= '';

  override render() {
    return html`
      <footer id="site-footer" class="site-footer">

        <mtm-container>
            <a href="/" class="logo">
                <slot name="logo"></slot>
            </a>
            <div>
                <p>
                    ${this.company}<br/>
                    ${this.address}<br/>
                    ${this.location}
                </p>
            </div>
        </mtm-container>

      </footer>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'mtm-footer': SiteFooter;
  }
}
