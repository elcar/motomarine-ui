import { LitElement, html, css, unsafeCSS} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { breakpoints } from '../../breakpoints';

@customElement('mtm-header')
export class SiteHeader extends LitElement {

  static override styles = css`
    :host{
      background: var(--mtm-color-surface-300);
      display:block;
      border-bottom: 8px solid var(--mtm-color-primary-100);
      margin-bottom: 2rem;
    }
    :host *{
      box-sizing: border-box;
    }
    .inner{
      max-width: var(--mtm-grid-container-width);
      margin: 0 auto;
      padding-inline: var(--mtm-grid-gutter);
    }
    .site-header-top .inner{
      padding-block: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logo{
      display: flex;
      align-items: center;
    }
    ::slotted([slot="logo"]){
      height: 40px;
      width: auto;
    }

    .searchbar{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .main-nav{
      border-top: 1px solid var(--mtm-color-neutral-400);
      padding-block: 1.25rem;
    }

    .main-nav ::slotted(ul){
      list-style-type: none;
      display: flex;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
      font-size: .9375rem;
      font-weight: 500;
    }

    .main-nav a{
      text-decoration: none;
    }

    @media ${unsafeCSS(breakpoints.md)} {
    }
  `;

  override render() {
    return html`
      <header id="site-header" class="site-header">

        <div class="site-header-top">

          <div class="inner">

            <a href="/" class="logo">
              <slot name="logo"></slot>
            </a>

            <div class="actions">
              <slot name="actions"></slot>
            </div>

            <div class="searchbar">
              <div class="">
                <input 
                    type="search" 
                    placeholder="Cerca..." 
                    id="site-search" 
                    name="site-search" 
                >
                <i data-feather="search" class="icon-sm" stroke-width="2"></i>
              </div>
            </div>

          </div>

        </div>

        <div class="main-nav">
          <div class="inner">
            <nav>
              <slot name="main-nav"></slot>
            </nav>
          </div>
        </div>

      </header>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'mtm-header': SiteHeader;
  }
}
