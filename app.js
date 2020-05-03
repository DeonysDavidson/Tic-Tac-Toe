
let i=0;



const select = (id) => {
	if(i<10){
  	  
	if(i%2===0 ){
		document.getElementById(id).innerHTML = "X";
		document.getElementById(id).disabled = true;
		i++;
	}
	else{
		document.getElementById(id).innerHTML = "O";
		document.getElementById(id).disabled = true;
		i++;
	}
  validation();
    if(i===9){
  	document.getElementById('message').innerHTML = "**Match Draw**";
  }

}
}


const validation = () => {
	win = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,6,9],[3,5,7],[4,5,6],[7,8,9]]
	buttons = document.querySelectorAll('button');
    
    win.forEach(ele  => {
       let data = ele.map(ele1 => {
          return document.getElementById(ele1.toString()).innerHTML;
       });
    if(JSON.stringify(data) === JSON.stringify(['X','X','X'])){
    	document.getElementById('message').innerHTML = 'Player 1 has won!';
    	i=10;
    }
    else if(JSON.stringify(data) === JSON.stringify(['O','O','O'])){
       document.getElementById('message').innerHTML = 'Player 2 has won!';
       i=10;
    }
    });
}

	const restart = () => {
		    location.reload();	
			i=0;
	}