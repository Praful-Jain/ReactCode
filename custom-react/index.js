const container = document.querySelector('#root');

// The html which is returned by our function/component, how react see it after compile
// React makes a tree for our element
// example object:  custom element object .. this is assumed by us its hypothetical not actual
const element = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: 'Click me to visit google'
}

// in order to render our element to the html page we need two things
// element to be rendered, place where to render ie. container
// and a function which helps us to render the element on webpage
// eg.. the render function in react
// here we will create our custom rendered
function customRender(element, container){
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const prop in element.props){
        domElement.setAttribute(prop, element.props[prop]);
    }
    container.appendChild(domElement);
}

customRender(element,container);