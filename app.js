// 1. User Clicks on Button 
// 2. Capture text in input field 
// 3. Display text on screen 
    // -create element 
    // -add the userText to the element 
    // -ADD the element as a child to UL 
// 4. When delete clicked... delete item 
       //add a delete button
       //Delete button on click should remove item
       //Add EventListener
       //Delete Parent
// 5. After item is added then clear text field
// 6.Auto focus afte ADD
//7. Enable ENTER-to-submit functionality

document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form.add');
    const addButton = document.querySelector('#addButton');
    const itemToAdd = document.querySelector('#itemToAdd');
    const ul = document.querySelector('.todo');
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        if(itemToAdd.value){
        const newItem= createItem(itemToAdd.value);
        ul.appendChild(newItem);
        itemToAdd.value = '';
        itemToAdd.focus();
        }
        
    });
    
    function createItem(val){
        const item = document.createElement('li');
        const span = document.createElement('span');
        const delBtn = document.createElement('button');
       
        span.textContent = val;
        delBtn.textContent = 'Delete';
        delBtn.classList.add('btn-link');
    
        item.appendChild(span);
        item.appendChild(delBtn);
  
        delBtn.addEventListener('click', function(){
            item.parentNode.removeChild(item); 
        })
        
        return item;
       
    } 
})

