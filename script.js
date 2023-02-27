let api = new XMLHttpRequest();
api.open('GET','https://restcountries.com/v3.1/all');
api.send();
api.onload = ()=>{
    console.log(JSON.parse(api.response));
    let array = JSON.parse(api.response);
    let asiacontients = array.filter(region=>{
        return region.region == 'Asia'
    });
    console.log(asiacontients);

    let population = array.filter(value =>{
        return value.population < 200000
    })
    console.log(population);

    let ncf = array.forEach(name)
    function name(element){
        console.log(element.name.common);
        console.log( element.capital);
        console.log  (element.flag);
    }
    console.log(ncf);

    let totalpopulation = array.reduce((acc,val)=>{
        return acc+val.population
    },0)
    console.log(totalpopulation);

    let usd = array.filter(val=>{
        if(val.currencies.USD.name == 'United States dollar') {
            console.log(val.name.common);
        }
    })
    console.log(usd);
};