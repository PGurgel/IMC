function imc(){
    var valt_tmp=document.f_imc.f_alt.value;
    var vpes_tmp=document.f_imc.f_pes.value;

    if((valt_tmp == 0)||(vpes_tmp == 0)){

        alert("Digite o peso ou altura");

    }else{

    var valt=valt_tmp.replace(",", ".");

    var vpes=vpes_tmp.replace(",", ".");

    var vimc=(vpes/Math.pow(valt,2)).toFixed(1);

    document.getElementById('result').innerHTML= ("O IMC é: " + vimc);
    }
    if(vimc < 19.1){
        document.getElementById('class').innerHTML='Estado: Abaixo do peso';
    }else if(vimc >= 19.1 && vimc <= 25.8){
        document.getElementById('class').innerHTML='Estado: Normal';
    }else if(vimc > 25.8 && vimc <= 27.3){
        document.getElementById('class').innerHTML='Estado: Pouco acima do peso';
    }else if(vimc > 27.3 && vimc <= 32.3){
        document.getElementById('class').innerHTML='Estado: Acima do peso';
    }else if(vimc > 32.3){
        document.getElementById('class').innerHTML='Estado: Obeso';
    }
}
    