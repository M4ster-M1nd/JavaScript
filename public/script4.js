
const arr = [
    'Text1',
    'Text2',
    'Text3',
    'Text4',
    'Text5'
]


console.log(arr)

const ul = document.createElement('ul');
document.body.appendChild(ul);

for (let i = 0; i < arr.length; i++) {

    const li = document.createElement('li');

    const text = document.createTextNode(arr[i]);

    li.appendChild(text);
    ul.appendChild(li);

}