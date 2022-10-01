
const calculate_btn = document.getElementById('calculate_btn');
const p = document.getElementById('p');

calculate_btn.addEventListener('click', (event) => {

    event.preventDefault()

    const select_input = parseInt(document.getElementById('select_input').value);

    if(select_input == 1){

        CelciusToFarenHeight();

    }else if(select_input == 2){

        CelciustoKelvin();
    }else if(select_input == 3){
        FarenHeighttoKelvin();

    }else if(select_input == 4){

        FarenHeightToCelcius();

    }else if(select_input == 5) {
        KelvinToCelcius();
    }else {
        KelvinToFarenHeight();
    }
    return 0;
})


// Farenheight to celcius function 

const FarenHeightToCelcius = () => {


    const number_value = mainFunction();
    const farenHeight = ((5/9) * (number_value-32)).toFixed(2);
    finalWork(farenHeight);

}

// celcius to farenheight function 

const CelciusToFarenHeight = () => {

    const number_value = mainFunction();
    const farenHeight = ((9/5)*number_value + 32).toFixed(2);
    finalWork(farenHeight);
    

}
//  farenheight to kelvin function 

const FarenHeighttoKelvin = () => {

    const number_value = mainFunction();
    const farenHeight = (((number_value-32)/1.8)+273.15).toFixed(2);
    finalWork(farenHeight);
    

}
//  celcius to kelvin function 

const CelciustoKelvin = () => {

    const number_value = mainFunction();
    const farenHeight = (number_value + 273.15).toFixed(2);
    finalWork(farenHeight);
    

}
//   kelvin to farenHeight function 

const KelvinToFarenHeight = () => {

    const number_value = mainFunction();
    const farenHeight = (((number_value-273.15)*1.8)+32).toFixed(2);
    finalWork(farenHeight);
}
    
//   kelvin to celcius function 

const KelvinToCelcius = () => {

    const number_value = mainFunction();
    const farenHeight = (number_value - 273.15).toFixed(2);
    finalWork(farenHeight);
    

}

// main function 

const mainFunction = () =>  {
    const original_value = document.getElementById('number_value').value;
    const number_value = parseInt(original_value);
    return number_value;
}

// side work function 

const finalWork = (farenHeight) => {
    p.innerHTML = farenHeight;
    document.getElementById('number_value').value = '';
}