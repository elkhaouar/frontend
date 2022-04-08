const inpFile = document.querySelector("#inpFile");

const custombtn = document.querySelector("#custom-btn");

const previewContainer = document.getElementById("imagePreview");

const previewImage = previewContainer.querySelector(".image-preview__image");

const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");

function defaultBtnActive(){
    inpFile.click();
}

inpFile.addEventListener("change", function() {
    const file = this.files[0]; 

    if (file){
        const reader = new FileReader();

        previewDefaultText.getElementsByClassName.display = "none";

        
        previewImage.style.display = "block";

        reader.addEventListener("load",function(){

            previewImage.setAttribute("src",this.result);
        });
        reader.readAsDataURL(file);
    }  else {
    
    }
});


