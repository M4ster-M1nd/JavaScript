
function getNode(node,depth=0) {

    console.log('\t'.repeat(depth), node.nodeType, node.nodeName);

//prevSiblin, nextSiblin, firstChild

    for (let i = 0; i < node.childNodes.length; i++) {

        getNode(node.childNodes[i],depth+1);
        
    }


}

getNode(document.body);

