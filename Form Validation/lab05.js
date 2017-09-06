function fnamefun(val) {
	var val = val.trim();

	if(val==""){
		//alert("cannot be null");
		document.getElementById("checkfname").innerHTML="first name cannot be null";
		document.getElementById("fname").focus();
		return false;
	}else{
		var j = '';
	 	var k = 0;
		/*for(i=0; i<val.length; i++)
		{
			j = val.charCodeAt(i);
			if( j<'A' || ((j>"Z") && (j<"a")) || j>"a" )   
			{
				if(j != "'"|| j != "-"){
					k--;
				}
			 }
		}*/
		j = j.toUpperCase();  
        if( j<"A" || j>"Z")
			{
				if(j != "'"|| j != "-"){
					k--;
				}
			 }
		}
		if(k<0){
			document.getElementById("checkfname").innerHTML="only alphabet or ' or - ";
		    document.getElementById("fname").focus();
		    return false;
		}else{
			document.getElementById("checkfname").innerHTML="";
			return true;
		}
	}

}

function lnamefun(val) {
	var val = val.trim();

	if(val==""){
		//alert("cannot be null");
		document.getElementById("checklname").innerHTML="last name cannot be null";
		document.getElementById("lname").focus();
		return false
	}else{
		var j = '';
	 	var k = 0;
		j = j.toUpperCase();  
          if( j<'A' || j>"Z")
			{
				if(j != "'"|| j != "-"){
					k--;
				}
			 }
		}
		if(k<0){
			document.getElementById("checklname").innerHTML="only alphabet or ' or - ";
		    document.getElementById("lname").focus();
		    return false;
		}else{
			document.getElementById("checklname").innerHTML="";
			return true;
		}
	}
	
}

function passfun(val){
	var val =val.trim();
	if(val.length<8){
		document.getElementById("passtext").innerHTML = "pass must be at least 8 digit"; 
		document.getElementById("paswd").focus();
	}else{
		var j = '';
	 	var upper=0;
	 	var lower=0;
	 	var num=0;
		for(i=0; i<val.length; i++)
		{
			j = val.charCodeAt(i);
			if( j>= "A" && j<="Z")   
			{
				upper++;
				// alert("upper");
			}else if( j>="a" && j<="z"){
				lower++;
				// alert("lower");
			}else if(j>="0" && j<="9"){
				num++;
			}else{}
		}
		// alert(upper);
		// alert(lower);
		if(upper == 0){
			document.getElementById("passtext").innerHTML = "should have atlease one uppercase, lowercase and number"; 
			document.getElementById("paswd").focus();
		}else if(lower == 0){
			document.getElementById("passtext").innerHTML = "should have atlease one uppercase, lowercase and number";
			document.getElementById("paswd").focus();
		}else if(num == 0){
			document.getElementById("passtext").innerHTML = "should have atlease one uppercase, lowercase and number";
			document.getElementById("paswd").focus();
		}else{
			document.getElementById("passtext").innerHTML = ""; 
		}
		
	}
}

function matchpassfun() {
    var pass1 = document.getElementById("paswd").value;
    var pass2 = document.getElementById("renter").value;
    if (pass1 != pass2) {
        // alert("Passwords Do not match");
        document.getElementById("checkpasstext").innerHTML = "Passwords Do not match";
        document.getElementById("renter").focus();
        return false;
        
    }
    else {
    	 document.getElementById("checkpasstext").innerHTML = "";
        // alert("Passwords Match!!!");
    }
    
}
//checkphone  phone
function phonefun(val){
var val = val.trim();
if(val.length != 12){
	document.getElementById("checkphone").innerHTML="format must be 999-999-9999";
	document.getElementById("phone").focus();
}else{
	var j = '';
	var nonnum=0;
	var areacode=0;
	var allzero=0
	for(i=0; i<val.length; i++){
		j = val.charCodeAt(i);
		if( !(j>="0" && j<="9") && j!="-" ){
			nonnum++;
		}

	}
	for (var i = 0; i < 3; i++){
	    if (val[i]=="0"){
	      areacode++;
	      
	    }
	}
	for (var i = 4; i < 7; i++){
	    if (val[i]=="0"){
	      allzero++;
	            
	    }
	}

	if(nonnum!=0){
		document.getElementById("checkphone").innerHTML="format must be 999-999-9999";
		document.getElementById("phone").focus();

	}else if(areacode ==3){
		document.getElementById("checkphone").innerHTML="insert valid areacode";
		document.getElementById("phone").focus();
	}else if(allzero == 3){
		document.getElementById("checkphone").innerHTML="insert valid phone number";
		document.getElementById("phone").focus();
	}

	else{
			document.getElementById("checkphone").innerHTML="";
	}

}
}
function checkEducation(){
  var status;
  if(document.getElementById('graduated').checked){
    status = true;
  }
  else if(document.getElementById('enrolled').checked){
    status = true;
  }
  else if(document.getElementById('notgraduate').checked){
    status = true;
  }
  else{
  	document.getElementById("education").innerHTML="Select any one option ";
		    
    status = false;
  }
  return status;
}