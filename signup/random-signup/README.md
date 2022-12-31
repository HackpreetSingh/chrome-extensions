# It is a plugin for frontend devs who want random data keep entering until they stop it manually

 > 4 sample entries are provided and we can add as many, as we have in the form page. We can add entry by copy pasting in the file at location: workers/injector.js as below: 
 For example, if we need to add a variable occupation for form input, then follow below steps.
 ### Note: Don't alter/change till line number 38 in injector.js file.
 
 - Add below line at any place from line number 40 to 44.
 ```
 var occupation = generateRandomString(10);
 ```  
 - Add below line at any place from line number 46 to 49.
 ```
 document.getElementById("id of occupation input").value=age;
 ```
 ### In place of "id of occupation input", put suitable id which is used in form.
 - Now for button click, add code to line 51 as following choice:
   1. If you have id of button, then use:
        ```
        document.getElementById("input_2").click();
        ```
   2. but if you have class name of button, then use:
        ```
        document.querySelector('Give class names of button preceded by dot(.) and without spaces in between.').click();
        ```
 
 ### You can remove the variable usages according to your needs.