class A11Modal extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML=`
        .modal {display:none;}
        .modal.open {displa}
        `
    }
}