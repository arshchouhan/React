const customReactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    child:"Click me to visit Google"
};

function customRender(customElement,container)
{
    const domElement=document.createElement(customElement.type);
    domElement.innerHTML=customElement.child;

    for(const prop in customElement.props)
    {
        if(prop=="child") continue;
        domElement.setAttribute(prop,customElement.props[prop]);
    }

    container.appendChild(domElement);
}


const customContainer=document.querySelector("#root");
customRender(customReactElement,customContainer);
