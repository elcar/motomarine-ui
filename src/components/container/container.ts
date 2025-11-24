import {LitElement, html, css } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement('mtm-container')

export class Container extends LitElement {
    static override styles = css`
        :host{
            max-width: var(--mtm-grid-container-width);
            margin: 0 auto;
            padding-inline: var(--mtm-grid-gutter);
            display: block;
        }
    `;

    override render() {
        return html`
            <slot></slot>
        `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'mtm-container': Container;
    }
}