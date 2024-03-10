
function customRender(reactElement, container) {

    // const domElemet = document.createElement(reactElement.type)
    // domElemet.innerHTML = reactElement.children
    // domElemet.setAttribute('href', reactElement.props.href)
    // domElemet.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElemet)

    /**   the same thing can be done using for loop
      and this will be the optimised method for the page 
      because in the upper code we are writing the setAttribute again again to set the
      attribute of html tag
    */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)


}


const mainContainer = document.querySelector('#root')
const reactElement = {
    type: "a",
    props: {
        href: 'https://google.com',
        target: '_blank'
    }
    ,
    children: "click me to visit google "
}


customRender(reactElement, mainContainer)