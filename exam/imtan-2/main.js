 function swapCase(text) {
     let swappedText = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
       if (char === char.toUpperCase()) {
         swappedText += char.toLowerCase();
      } else {
        swappedText += char.toUpperCase();
      }
    }
     return swappedText;
   }

   console.log(swapCase("CdDd")); 
 console.log(swapCase("fRonTe")); 
 console.log(swapCase("itbRainsAcAdemY")); 