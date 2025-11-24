import {LitElement, html, css } from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement('mtm-prose')

export class Prose extends LitElement {
    static override styles = css`
        ::slotted(*:not(:last-child)) {
            margin-block: 1rem;
        }
        mtm-button{
            opacity: .1;
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
        'mtm-prose': Prose;
    }
}