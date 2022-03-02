let myCheckbox = document.querySelector(".switch input");

duration = document.querySelector(".month"),
price = document.querySelector(".price .pricefix"),
switcher = document.querySelector(".switch"),
range = document.querySelector(".myrange"),
pricePhone =  document.querySelector(".price-phone .pricefix-phone"),
durationPhone = document.querySelector(".month-phone");

    switcher.onclick = function(){
        if(myCheckbox.checked == true){
            let priceInt = parseInt(price.textContent);
            price.textContent = (priceInt - (priceInt * .25)) * 12;
            pricePhone.textContent = (priceInt - (priceInt * .25)) * 12;
            duration.textContent = '/year'
            durationPhone.textContent = '/year'
        }
        else{
            updatePrice()
            duration.textContent = '/month'
            durationPhone.textContent = '/month'
        } 
    }
        
let pageViews = document.querySelector(".page-views span");
range.addEventListener("input", updatePrice);

    function updatePrice(){
        if(range.value == 1){
            if (myCheckbox.checked == true) {
                price.textContent = 72;
                pricePhone.textContent = 72;
            }
            else{
                price.textContent = 8;
                pricePhone.textContent = 8;
            }

            pageViews.textContent = "10K"
        }

        if (range.value == 2){
            if (myCheckbox.checked == true) {
                price.textContent = 108;
                pricePhone.textContent = 108;
            }
            else{
                price.textContent = 12;
                pricePhone.textContent = 12;
            }

            pageViews.textContent = "50k";
        }
        
        if (range.value == 3){
            if (myCheckbox.checked == true) {
                price.textContent = 144;
                pricePhone.textContent = 144;
            }
            else{
                price.textContent = 16;
                pricePhone.textContent = 16;
            }
            
            pageViews.textContent = "100k";
        }

        if (range.value == 4){
            if (myCheckbox.checked == true) {
                price.textContent = 216;
                pricePhone.textContent = 216;
            }
            else{
                price.textContent = 24;
                pricePhone.textContent = 24;
            }

            pageViews.textContent = "500k";
        }

        if (range.value == 5){
            if (myCheckbox.checked == true) {
                price.textContent = 324;
                pricePhone.textContent = 324;
            }
            else{
                price.textContent = 36;
                pricePhone.textContent = 36;
            }

            pageViews.textContent = "1M";
        } 
    }    
        