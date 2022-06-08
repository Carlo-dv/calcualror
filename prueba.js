
var  lista=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var numero_productos=0;
var  total_productos=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function registro(){


    var cantidad = document.getElementById("cantidad").value
    var producto = document.getElementById("producto").value
    
  switch (producto) {
   case "america":
   console.log("Americano")
    
    lista[0]+=parseInt(cantidad);
    numero_productos+=cantidad;
    document.getElementById("americano_cant").innerText=+lista[0];
    document.getElementById("americano_total").innerText=+(lista[0]*2500)

    total_productos[0]+=1;
       
    break;
  case "capu": lista[1]+=parseInt(cantidad);
  
            
    document.getElementById("capu_cant").innerText=+lista[1];
    document.getElementById("capu_total").innerText=+(lista[1]*5000)
    total_productos[1]+=1;
        

    break;
    case "capu2":
          lista[2]+=parseInt(cantidad);
          document.getElementById("capu_2_cant").innerText=+lista[2];
          document.getElementById("capu_2_total").innerText=+(lista[2]*6500)
          total_productos[2]+=1;

      break;
    case "machiato":
         lista[3]+=parseInt(cantidad);
        
        document.getElementById("machiato_cant").innerText=+lista[3];
        document.getElementById("machiato_total").innerText=+(lista[3]*3500)
          
         total_productos[3]+=1;
      break;
    case "enve":
        lista[4]+=parseInt(cantidad);
         
        document.getElementById("env_cant").innerText=+lista[4];
        document.getElementById("env_total").innerText=+(lista[4]*8000)
        total_productos[4]+=1;
      break;

    case "late":
        lista[5]+=parseInt(cantidad);
        document.getElementById("late_cant").innerText=+lista[5];
        document.getElementById("late_total").innerText=+(lista[5]*7000)
        total_productos[5]+=1;
      break;

    case "caleta":
    lista[6]+=parseInt(cantidad);
    document.getElementById("caleta_cant").innerText=+lista[6];
    document.getElementById("caleta_total").innerText=+(lista[6]*5000)
        
    total_productos[6]+=1;
      break;

    case "exp2":
    lista[7]+=parseInt(cantidad);
    
    document.getElementById("exp_2_cant").innerText=+lista[7];
    document.getElementById("exp_2_total").innerText=+(lista[7]*3500)
       
    total_productos[7]+=1;
      break;
    case "exp":
    lista[8]+=parseInt(cantidad);
    
    document.getElementById("exp_cant").innerText=+lista[8];
    document.getElementById("exp_total").innerText=+(lista[8]*2000)
    
    total_productos[8]+=1;
      break;

    case "chocolate":
    lista[9]+=parseInt(cantidad);

    
    document.getElementById("choco_cant").innerText=+lista[9];
    document.getElementById("choco_total").innerText=+(lista[9]*7000)
    
    
    total_productos[9]+=1;
break;
    case "aroma":
        lista[10]+=parseInt(cantidad);
        
    document.getElementById("aroma_cant").innerText=+lista[10];
    document.getElementById("aroma_total").innerText=+(lista[10]*4000)
        
        total_productos[10]+=1;
      break;

     case "alfajor":
        lista[11]+=parseInt(cantidad);
        document.getElementById("alfa_cant").innerText=+lista[11];
        document.getElementById("alfa_total").innerText=+(lista[11]*5500)
           
        total_productos[11]+=1;
      break;
  
    
      case "moca":
        lista[12]+=parseInt(cantidad);
        document.getElementById("moca_cant").innerText=+lista[12];
        document.getElementById("moca_total").innerText=+(lista[12]*7000)
          
        
        
        total_productos[12]+=1;
      break;
      
      
      case "pastel":
        lista[13]+=parseInt(cantidad);
        document.getElementById("pastel_cant").innerText=+lista[13];
        document.getElementById("pastel_total").innerText=+(lista[13]*5500)
        
        
        total_productos[13]+=1;
      break;  

      case "refresco":
        lista[14]+=parseInt(cantidad);
        document.getElementById("fresh_cant").innerText=+lista[14];
        document.getElementById("fresh_total").innerText=+(lista[14]*5000)
          
        total_productos[14]+=1;
      break;  


      case "leche_v":
        lista[15]+=parseInt(cantidad);
        document.getElementById("leche_cant").innerText=+lista[15];
        document.getElementById("leche_total").innerText=+(lista[15]*2000)
          
        total_productos[14]+=1;
      break;  
 
     

  default:




}
}