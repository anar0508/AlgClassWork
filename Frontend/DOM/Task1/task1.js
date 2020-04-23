let table = document.querySelectorAll('tr');
table.forEach((el)=> {if (el.lastChild.innerHTML<0){el.lastChild.className='decrease'}
else if (el.lastChild.innerHTML>0){el.lastChild.className='increase'}
});




