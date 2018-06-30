class TestClass {
    constructor() {
        
    }
    getName(name : string) {
        return "Welcome" + name;
    }
}

window.onload = ()=>{
    let testObj : TestClass = new TestClass();
    let sentance = testObj.getName("Bala");
    let divEle = document.getElementById("testSample");
    if (divEle) {
        divEle.innerHTML = sentance;    
    }
    console.log(sentance);
}
    

