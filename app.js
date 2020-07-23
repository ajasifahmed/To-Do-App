var ol=document.getElementById('ol');
function add()
{
var to_do=document.getElementById('to-do');
var li=document.createElement('li');
var li_text=document.createTextNode(to_do.value);
li.appendChild(li_text);
ol.appendChild(li);
to_do.value=""

var button=document.createElement('button');
var button_text=document.createTextNode('Delete');
button.appendChild(button_text);
li.appendChild(button);

button.setAttribute("onclick","del(this)")
button.setAttribute("class","btn")

var edit_button=document.createElement('button');
var e_button_text=document.createTextNode('Edit');
edit_button.appendChild(e_button_text);
li.appendChild(edit_button);

edit_button.setAttribute("onclick","edit(this)")
edit_button.setAttribute("class","edit-btn")

}

function del(e)
{
    e.parentNode.remove();
}
function deleteAll()
{
    ol.innerText=""
}
function edit(e)
{
var val=e.parentNode.firstChild.nodeValue;
var edit_value=prompt('enter the task',val);
e.parentNode.firstChild.nodeValue=edit_value;
}