import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('mtm-button')

export class Button extends LitElement {
  static override styles = css`

    :host{
        display: inline-block;
        --btn-border-color: transparent;
        --btn-bg: var(--mtm-color-primary-100);
        --btn-text-color: var(--mtm-color-white);
        --btn-height: 2.5rem;
    }

    :host(:hover){
        --btn-bg: var(--mtm-color-primary-200);
    }

    :host-context(p) {
      margin-block: .75rem;
      display: block;
    }

    ::slotted(button), ::slotted(a){
        background: var(--btn-bg);
        color: var(--btn-text-color);
        height: var(--btn-height);
        transition: all .25s ease;
        display: inline-flex;
        align-items: center;
        padding-inline: .75rem;
        font-weight: 500;
        border-radius: 8px;
        border: 1px var(--btn-border-color) solid;
        text-decoration: none;
    }
        
    :host([outline]){
        --btn-bg: transparent;
        --btn-border-color: var(--mtm-color-primary-100);
        --btn-text-color: var(--mtm-color-primary-100);
    }
    :host([outline]:hover){
        --btn-bg: var(--mtm-color-primary-100);
        --btn-text-color: var(--mtm-color-white);
    }

    :host([variant="secondary"]){
        --btn-bg: var(--mtm-color-surface-200);
        --btn-text-color: var(--mtm-color-text-low);
    }

    :host([variant="secondary"]:hover){
        --btn-bg: var(--mtm-color-surface-300);
        --btn-text-color: var(--mtm-color-text-high);
    }

    :host([variant="secondary"][outline]){
        --btn-bg: transparent;
        --btn-border-color: var(--mtm-color-neutral-400);
        --btn-text-color: var(--mtm-color-text-low);
    }
    :host([variant="secondary"][outline]:hover){
        --btn-bg: #A6A6A650;
    }

  `;

  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: String }) variant: 'primary' | 'secondary' = 'primary';
  @property({ type: Boolean, reflect: true }) outline: boolean = false;

  
  override render() {

    return html`
        <slot></slot>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'mtm-button': Button;
  }
}