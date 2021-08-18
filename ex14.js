

function calcular(){
    
   let inicio = document.getElementById('inicio')
   let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resp=document.getElementById('resp')
    let verifique=document.getElementById('verifique')

    resp.innerHTML='Contador:<br>'

    let entrada = Number(inicio.value)
    let incremento= Number(passo.value)
    let acabou= Number(fim.value)

    if(inicio.value.length==0 ||passo.value.length==0 || fim.value.length==0 ){
        resp.innerHTML='É nessário preencher os espaços vazios!'
        verifique.style.backgroundColor='red'
        verifique.style.color='white'

    }else{
        //consirando o incremento
        if (incremento==0 ) {
            window.alert('Não pode ser zero, para isso vamos considerar o passo =1!')
            incremento=1
            
        }
        else if(entrada<=acabou){
            //crescente
            while(entrada<=acabou){
                
                resp.innerHTML  +=`👉${entrada} `;//+=contanecao com q ele ja tem
                entrada+=incremento

                
                

            }
        
        }
           
            
        else if(entrada>acabou){
       
            //decrescente
            while(entrada>=acabou){
                resp.innerHTML  +=`👉${entrada} `;//+=contanecao com q ele ja tem
                entrada-=incremento
                    
            }

       
        }
       
        

        
        resp.innerHTML+=" 🏁"
            
        
        
    }
        
    
   
   
}