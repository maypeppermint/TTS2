$(document).ready(function () {
    //Bar menu for mobil screen
    $("i.barMenu").click(function () {
        $("nav").show();
    });
    $("nav i.fa-times").click(function () {
        $("nav").hide();
    });
    //Aside menu for mobil screen
    $("aside ul.productType").click(function () {
        $("aside ul.productType li").toggle();
    });
    $("aside ul.stone").click(function () {
        $("aside ul.stone li").toggle();
    });
    $("aside ul.collection").click(function () {
        $("aside ul.collection li").toggle();
    });
    //Links hover effect
    let links = document.getElementsByTagName("a");
    textHoverEffect(links, "bold");
    let icons = document.getElementsByTagName("i");
    colorChangeHoverEffect(icons, "yellow");
    //Adding alt value
    let productNames = document.getElementsByClassName("productNames");
    let productImg = document.getElementsByClassName("productImg");
    addingAltValue(productImg, productNames);

    let crystalImg = document.querySelectorAll("section.crystal img");
    let crystalName = document.querySelectorAll("section.crystal p");
    addingAltValue(crystalImg, crystalName);

    //Img's hover effect
    //Product pictures
    for (let i = 0; i < productImg.length; i++) {
        productImg[i].addEventListener("mouseover", function (e) {
            e.target.style.border = "3px solid yellow";
            changeImage(e.target, "_1", "_2");
        })
        productImg[i].addEventListener("mouseleave", function (e) {
            e.target.style.border = "";
            changeImage(e.target, "_2", "_1");
        })
    }

    //Crsytal pictures
    for (let i = 0; i < crystalImg.length; i++) {
        crystalImg[i].addEventListener("mouseover", function (e) {
            e.target.style.border = "3px solid yellow";
        })
        crystalImg[i].addEventListener("mouseleave", function (e) {
            e.target.style.border = "";
        })
    }
    //To show crystals details
    $(crystalImg).click(function () {
        document.querySelector("div.crystalDetails img").src = this.src;
        $("div.crystalDetails").show();
    });
    $(".fa-times").click(function () {
        $("div.crystalDetails").hide();
    });

    for (let i = 0; i < crystalImg.length; i++) {
        crystalImg[i].addEventListener("onclick", function (e) {
            document.querySelector("div.crystalDetails").style.display = block;
        });
    }

    //Focus pictures effect (need to improve)
    let right = $("i.fa-chevron-right");
    right.hover(rightPicClick());

    let left = $("i.fa-chevron-left");
    left.hover(leftPicClick());

    //Functions
    function leftPicClick() {
        let middlePic = $("img.f2");
        let leftPic = $("img.f1");
        let rightPic = $("img.f3");
        left.click(function () {
            rightPic.removeClass("f3");
            rightPic.addClass("f2");
            rightPic.css("zIndex", "3");
            rightPic.animate({ left: "20%" });

            middlePic.removeClass("f2");
            middlePic.addClass("f1");
            middlePic.css("zIndex", "1");
            middlePic.animate({ "left": "-38%" });

            leftPic.removeClass("f1");
            leftPic.addClass("f3");
            leftPic.css("zIndex", "2");
            leftPic.animate({ "left": "78%" });

            middlePic = $("img.f2");
            leftPic = $("img.f1");
            rightPic = $("img.f3");
        });
    }
    function rightPicClick() {
        let middlePic = $("img.f2");
        let leftPic = $("img.f1");
        let rightPic = $("img.f3");
        right.click(function () {
            leftPic.removeClass("f1");
            leftPic.addClass("f2");
            leftPic.css("zIndex", "3");
            leftPic.animate({ left: "20%" });

            middlePic.removeClass("f2");
            middlePic.addClass("f3");
            middlePic.css("zIndex", "2");
            middlePic.animate({ "left": "78%" });

            rightPic.removeClass("f3");
            rightPic.addClass("f1");
            rightPic.css("zIndex", "1");
            rightPic.animate({ "left": "-38%" });

            middlePic = $("img.f2");
            leftPic = $("img.f1");
            rightPic = $("img.f3");
        });
    }
    // Text's hover effect function
    function textHoverEffect(array, mouseoverValue, originalValue, mouseleaveValue) {
        for (let i = 0; i < array.length; i++) {
            array[i].addEventListener("mouseover", function (e) {
                originalValue = e.target.style.fontWeight;
                if (typeof mouseleaveValue == undefined) {
                    mouseleaveValue = originalValue;
                }
                e.target.style.fontWeight = (mouseoverValue);
            })
            array[i].addEventListener("mouseleave", function (e) {
                e.target.style.fontWeight = (mouseleaveValue);
                mouseleaveValue = "";
            })
        }
    }

    // Color change hover effect function
    function colorChangeHoverEffect(array, mouseoverValue, originalValue, mouseleaveValue) {
        for (let i = 0; i < array.length; i++) {
            array[i].addEventListener("mouseover", function (e) {
                originalValue = e.target.style.color;
                if (typeof mouseleaveValue == undefined) {
                    mouseleaveValue = originalValue;
                }
                e.target.style.color = (mouseoverValue);
            });
            array[i].addEventListener("mouseleave", function (e) {
                e.target.style.color = (mouseleaveValue);
                mouseleaveValue = "";
            });
        }
    }

    //Adding alt values function
    function addingAltValue(img, text) {
        for (let i = 0; i < img.length; i++) {
            img[i].alt = text[i].innerHTML;
        }
    }

    //Product's img change function
    function changeImage(img, src1, src2) {
        img.src = img.src.replace(src1, src2);
    }
});
