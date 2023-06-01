let isScrolled = false;
        const desktop__nav = document.getElementById("desktop__nav")
        const logo1 = document.getElementById("logo1")
        const logo1__img = document.getElementById("logo1__img")



        window.onscroll = () => {
                if(window.pageYOffset >= 34.4 ){
                    desktop__nav.style.display = "none";
                    logo1.style.top = "0px";
                    logo1__img.style.height = '3.6rem'
                    logo1__img.style.width = '3.6rem'
                }
                else if(window.pageYOffset < 34.4 ){
                    desktop__nav.style.display = "flex";
                    logo1.style.top = "-22px";
                    logo1__img.style.height = '5.6rem'
                    logo1__img.style.width = '5.6rem'
                }
        }