import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
   

  function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
 
  
 

function Booksfunction() {
  return (


    



  <table id="myTable">

    <th>

    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." />


    </th>

  	<tr>
  			<td>
  			<img src={books.booka.bookcover}></img>
  			<td>{books.booka.title}</td>
  			<td>{books.booka.retailprice}</td>
  			</td>
  			<td>
  			<img src={books.bookb.bookcover}></img>
  			<td>{books.bookb.title}</td>
  			<td>{books.bookb.retailprice}</td>
  			</td>
  			
  			
  	</tr>
  	
  </table> 




);
}









var books = {
    "booka":{
    "bookid":"01",
    "title":"Rebels:City of Indra",
    "retailprice":"450",
    "description":"Rebels: City of Indra is a 2014 science fiction or dystopian novel by Kendall Jenner, Kylie Jenner, and ghostwriter Maya Sloan.",
    "bookcover": "http://t2.gstatic.com/images?q=tbn:ANd9GcSZmP2f6mPadWxTW2JBMimLeAlwRitaiG2EDzCY962XUpdmYpGy"},

    "bookb":{
    "bookid":"02",
    "title":"Angels and Demons",
    "retailprice":"950",
    "description":"Rebels: City of Indra is a 2014 science fiction or dystopian novel by Kendall Jenner, Kylie Jenner, and ghostwriter Maya Sloan.",
    "bookcover": "http://t2.gstatic.com/images?q=tbn:ANd9GcSZmP2f6mPadWxTW2JBMimLeAlwRitaiG2EDzCY962XUpdmYpGy"},
};


const element = (

    Booksfunction()
);

ReactDOM.render(
  element,

  
  document.getElementById('root')
);
registerServiceWorker();
