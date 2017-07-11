import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
   

  function search() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();



  if(filter==books.title){
        document.getElementById("demo").innerHTML = filter;
  }




  // Loop through all table rows, and hide those who don't match the search query
  /*
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
  */
}
 
  
 

function Booksfunction() {
  return (


    



  <table id="myTable">

    <th>
    <form action="index.html">
    <input type="text" id="myInput" onkeyup="search()" placeholder="Search for books.." />
    <input type="submit" name="sub_btn" value="submit" class="btn" />
    </form>

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
        <td>
        <img src={books.bookc.bookcover}></img>
        <td>{books.bookc.title}</td>
        <td>{books.bookc.retailprice}</td>
        </td>
        <td>
        <img src={books.bookd.bookcover}></img>
        <td>{books.bookd.title}</td>
        <td>{books.bookd.retailprice}</td>
        </td>
        <td>
        <img src={books.booke.bookcover}></img>
        <td>{books.booke.title}</td>
        <td>{books.booke.retailprice}</td>
        </td>
        <td>
        <img src={books.bookf.bookcover}></img>
        <td>{books.bookf.title}</td>
        <td>{books.bookf.retailprice}</td>
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
    "description":"",
    "bookcover": "http://static.rogerebert.com/uploads/movie/movie_poster/angels-and-demons-2009/large_grN4lETrHNejatQZFP2F2DAWMU4.jpg"},

    "bookc":{
    "bookid":"03",
    "title":"Inferno",
    "retailprice":"850",
    "description":"",
    "bookcover": "http://www.sonypictures.com/movies/inferno/assets/images/onesheet.jpg"},

    "bookd":{
    "bookid":"04",
    "title":"Da Vinci Code",
    "retailprice":"900",
    "description":"",
    "bookcover": "https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg"},

    "booke":{
    "bookid":"05",
    "title":"The Lost Symbol",
    "retailprice":"1000",
    "description":"",
    "bookcover": "https://images-eu.ssl-images-amazon.com/images/I/51vFKUWpjHL._SX260_.jpg"},

    "bookf":{
    "bookid":"06",
    "title":"Deception Point",
    "retailprice":"350",
    "description":"",
    "bookcover": "http://images.gr-assets.com/books/1464198480l/30290195.jpg"},
};


const element = (

    Booksfunction()
);

ReactDOM.render(
  element,

  
  document.getElementById('root')
);
registerServiceWorker();
