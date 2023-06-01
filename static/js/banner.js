      // banner carousel
      const slides = document.querySelectorAll(".slide");
        const slider = document.getElementById("slider");
        let innserSlide = slides[0];
        let counter = 0;
        slides.forEach((slide,index) => {
            slide.style.left = `${index * 100}%`
        })

        const prevSlide = () => {
            counter--;
            slideImage();
        }

        const nextSlide = () => {
            counter++;
            slideImage();
        }

        let pressed = false;
        let startX;
        let endX;
        let x;
        slider.addEventListener("mousedown", (e) => {
            pressed = true;
            startX = e.offsetX;
    });

        slider.addEventListener("mouseup", (e) => {
            pressed = false;
            endX = e.offsetX;
            if(startX < endX){
                prevSlide();
            }
            else if(startX > endX){
                nextSlide();
            }
        });

        // slider.addEventListener("mousemove", (e) => {
        //     if (!pressed) return;
        //     const translatePx = e.offsetX - startX;
        //     console.log("mousemove",e.offsetX)
        //     console.log("translatePx",translatePx)
        //     slides.forEach(slide => {
        //         slide.style.transform = `translateX(-${50}px)`
        //     })
        // });
        const slideImage = () => {
            if(counter === slides.length){
                console.log("hello")
                counter = 0;
            }
            if(counter < 0){
                counter = slides.length -1;
            }
            slides.forEach((slide) => {
                slide.style.transform = `translate(-${counter * 100}%)`
            })
        }
