
////////This code with  sepatrate every oparration in it function ||هاد  لما نحط كل عمليه بفنكشن لحاله ]
// First :catch the input and save in vareiable  // Second : print them to ensure catch them exactly
var courseNameInput = document.getElementById("courseName");
var categoryNameInput = document.getElementById("courseCategory");
var coursePriceinput = document.getElementById("coursePrice");
var courseDescInput =document.getElementById("courseDescription");
//console.log(courseNameInput ,categoryNameInput ,coursePriceinput ,courseDescInput );
// end step first &&  second

//step 22 ==>to collect all input in array to use it in clear func instead of step 20
 var inputs = document.getElementsByClassName("inputs");
 //console.log(inputs);

//step 7 add var for button to catch it and ensure catch it from cosole.log  //then step 8
var addBtn = document.getElementById("click");
//console.log(click);

//step 11: declare array  //step12: اضيف شو بدي اضيف عليها ؟ //step 13 اطبعها عشان اتاكد
//var courses=[]; نقلناها عشان خطوة 33

//step 35 :catch delete all btn .. then print it to sure we catch it correctly as in step 36
var deleteBtn = document.getElementById("deleteBtn");

//step14 :catch table and print it
var data =document.getElementById("data");
//console.log(data);

var currentIndex=0; //step 45 عشان بخزن فيه الindex اللي انا عليه حاليا عشان كبسة التعديل

var nameAlert= document.getElementById("nameAlert");

//=======================================================end variable region


//step 3 in html add onclick="addCouse()"   // step 4 :add "addCourse" Function // step 5 : give this func alert to sure it work  //step 6: (step 3 &&4 && 5 not pest practise so we will delete them)
// function addCourse(){
//    // alert("helloo");
// }

// step 33 to show local storage data when user open the site ==لعرض البانات اللي بالlocal storage اول ما اليوزر يفتح الموقع
// var test =localStorage.getItem("coursesList");///هاي ترجع سترينغ وانا بدي arr of obj
// console.log(test);
// var test =JSON.parse(localStorage.getItem("coursesList")); //رجعهم على array of obj وتستتهم
// console.log(test);

if (localStorage.getItem("coursesList")== null)
{
    var courses=[];
}
else{
   var courses =JSON.parse(localStorage.getItem("coursesList")); //هون حطيتهم بال arr واستدعيت عرض البيانات
    displayData();
}
//end of step 33

//step8  بحكي التاق اللي ماسكه بدي اعمل الايفينت التالي عليه وبتأكد من انع الفنكشن شغال
addBtn.onclick =function(){
//alert("helo from func");
//addCourse();
//step43 كمتت  addCourse();وضفت الكود اللي تحت
if(addBtn.innerHTML == "Add Cource")
{
    addCourse();   
}
else{
    updateCource();
}
//end of 43

displayData();
clearForm();//step21
}

function addCourse(){
    // step 9 : now i want to save the entered data in to table (more than 1 info ==> obj)  // step 10: then corrently we will print it
var course={
    name : courseNameInput.value ,
    category : categoryNameInput.value ,
    price:coursePriceinput.value,
    desc :courseDescInput .value,
}
// step10
//console.log(course);

//step12  اضيف شو بدي اضيف عليها ؟
courses.push(course) ;
//step13 
//console.log(courses);

//step 32: to add info in local storage to be in it although we close the browser ||عشان تضل الداتا حتى لو سكرنا البراوزر 
localStorage.setItem("coursesList" , JSON.stringify(courses));


}

//read function  (show data in table)
function displayData(){
//step 16 add empty var to add in it td && tr (محتويات الجدول)
var result = "";
//step15  // read data in table (using loop عشان نلف عالمصفوفة)
for(var i =0 ; i< courses.length ; i++){
//     //step17
//     /* result +=`<tr> 
// // <td> "+ i+ "</td> 
// // <td> "+ courses[i].name+ "</td>
// // <td> "+ courses[i].category+ "</td>
// //  <td> "+ courses[i].price+ "</td> 
// //  <td> "+ courses[i].desc+ "</td> 
// //  <td> <button> update</button> </td>
// //  <td> <button class="delete"> delete</button> </td> </tr>`*/ 

////the way below new way in concatenation
 result +=`
 <tr>
 <td>${[i]}</td>
 <td>${courses[i].name}</td>
 <td>${courses[i].category}</td>
 <td>${courses[i].price}</td>
 <td>${courses[i].desc}</td>
 <td> <button class="update" onclick="getCourceData(${i})" > update</button> </td> 
 <td> <button class="delete" onclick="deleteCourse(${i})"> delete</button> </td> 
 </tr>
 `;
} //step24 add onclick="deleteCourse()" above  //step 26 add ${i}
//step38 عشان كبسة الupdate add onclick="getCourceData(${i})" above

//step18 حتى اضيف علة الداتا اي اللي ماسكه قيم الresult
data.innerHTML= result;
}


// clear form data after save info //step19
function clearForm(){
   // //first way step 20
    // courseNameInput.value="";
    // categoryNameInput.value="";
    // coursePriceinput.value="";
    // courseDescInput.value="";

      // //second way way step 23
for(var i=0; i<inputs.length ; i++)
{
    inputs[i].value="";
}
}

//step 25 add delete function  //then step 27 add index between ()
function deleteCourse(index){
   // console.log("hh");
   // console.log(index); // step 28 to ensure
   //step 29 use splice
   courses.splice(index , 1); //to delete the choosen index
  localStorage.setItem("coursesList" ,JSON.stringify(courses));//step 34 عشان لما بحذف يعدل على الlocal storge ويبطل يرجع المحذوف
   displayData(); //  step 30 to show data after delete ""عشان نشوف التأثير الفعلي بعد الحذف
}

//step 31 : To test local storage with set item  then we will add it inside addcourse func as in step 32
//localStorage.setItem("this is key" , "this is value");

// step36  delete alll
deleteBtn.onclick = function(){
   // console.log(deleteBtn);
   localStorage.removeItem("coursesList");
   courses=[ ]; //حتى نفضيها
   data.innerHTML =""; //حتى يفضي الصفحة بدون ريفرش
}

//step 37 search بحث وانا بكتب اول ب اول بعد التعديل على كبسة البحث بالhtml باضافة onkeyup="test()"
function search(name){
   // console.log("hhh"); //نجربة طول مانا بدخل داتا مثلaaaaaaaaaaaaaaaاول ما بشيل اصبعي يطلع بالكونسول
//console.log(name);
//نفس كود الdisplay بس زيادة الif statement
var result = "";
for(var i =0 ; i< courses.length ; i++){
// if (courses[i].name == name ||courses[i].desc == name ||courses[i].price == name ||courses[i].category == name)  //ضفنا جملة الif زيادة عن كود الdisplay
 
if (
    courses[i].name.toLowerCase().includes(name.toLowerCase()) || //بدي يبحث بجزء وليس اذا تطابقت بالزبط زي الif اللي قبل هاي
    courses[i].desc.toLowerCase().includes(name.toLowerCase()) ||
    courses[i].category.toLowerCase().includes(name.toLowerCase()) ||
    courses[i].price.includes(name)
)
{
 result +=`
 <tr>
 <td>${[i]}</td>
 <td>${courses[i].name}</td>
 <td>${courses[i].category}</td>
 <td>${courses[i].price}</td>
 <td>${courses[i].desc}</td>
 <td> <button class="update"> update</button> </td>
 <td> <button class="delete" onclick="deleteCourse(${i})"> delete</button> </td> 
 </tr>
 `;
   }
} 
data.innerHTML= result;
}

//39 update button
function getCourceData(index){
   // console.log(index); //بتأكد اني ماسكه صح
   var course =courses[index];
  // console.log(course);
  //عشان يعرض القيم بالحقول //step40
  courseNameInput.value = course.name ; //بالحقل تبعها عشان بعرض القيمة 
  categoryNameInput.value = course.category ;
  coursePriceinput.value = course.price ;
  courseDescInput.value = course.desc ;

  // عشان يعرف انه كبست update
  //ورح تتغير اللي عالكبسة من add cource to update cource
  addBtn.innerHTML ="update course";  //step 41

  currentIndex = index ; //step 46 عشان كبسة التعديل بعرف انا وين واقف حاليا

}

//step 44 add update func
function updateCource(){
   // console.log("updateFunc");
   //step 47
   var course={
    name : courseNameInput.value ,
    category : categoryNameInput.value ,
    price:coursePriceinput.value,
    desc :courseDescInput .value,
}

//step48
courses[currentIndex].name = courseNameInput.value ;
courses[currentIndex].category = categoryNameInput.value ;
courses[currentIndex].price =coursePriceinput.value;
courses[currentIndex].desc =courseDescInput .value;

//step49 عشان لما بعمل ريفرش بعد التعديل تضل البيانات المعداة
localStorage.setItem("coursesList" ,JSON.stringify(courses));

//step 50
addBtn.innerHTML ="Add Cource";   //until return add employee value to button after do updae||عشان يرجع قيمة الكبسة للاضافة وما تضل قيمتها تعديل وبالتالي عشان لو حاولنا نضيف ريكورد جديد ما بعدل على اللي قبله ولكن يعمل اله اضافة جديدة 
}

//Step 54 to put pattern+ return add coure enable
courseName.onkeyup = function(){
   // console.log("hh");
   var namePattern =/^[A-Z][a-z]{2,8}$/;
  // console.log(namePattern.test(courseName.value));
  if(namePattern.test(courseName.value))
  {
    addBtn.removeAttribute("disabled");
    courseName.classList.add('is-valid');
    courseName.classList.remove('is-invalid');
    nameAlert.classList.add('d-none');//عرفنا الها متغير عشان نمسكها
  }
  else
  {
   // addBtn.disabled="true"; //اي طريقة صح هاي ولا اللي تحتها
   addBtn.setAttribute("disabled" ,"true");
   //courseName.classList.replace('is-valid','is-invalid'); //مشكلتها ما اشتغلت لما بلشت اكتب اول حرف صغير
   courseName.classList.add('is-invalid');
   courseName.classList.remove('is-valid'); //عشان لما اصحح الغلط ما يضل معلق عالحالة
   nameAlert.classList.remove('d-none');
}
}
 //validation for category name
 courseCategory.onkeyup = function(){
    // console.log("hh");
    var categoryNamePattern =/^[A-Z][a-z]{2,10}$/;
   // console.log(namePattern.test(categoryNamePattern.value));
   if(categoryNamePattern.test(courseCategory.value))
   {
     addBtn.removeAttribute("disabled");
     courseCategory.classList.add('is-valid');
     courseCategory.classList.remove('is-invalid');
    // nameAlert.classList.add('d-none');//عرفنا الها متغير عشان نمسكها
   }
   else
   {
    // addBtn.disabled="true"; //اي طريقة صح هاي ولا اللي تحتها
    addBtn.setAttribute("disabled" ,"true");
    //courseCategory.classList.replace('is-valid','is-invalid'); //مشكلتها ما اشتغلت لما بلشت اكتب اول حرف صغير
    courseCategory.classList.add('is-invalid');
    courseCategory.classList.remove('is-valid'); //عشان لما اصحح الغلط ما يضل معلق عالحالة
   // nameAlert.classList.remove('d-none');
 }
 }

 //validation for price
 coursePrice.onkeyup = function(){
    // console.log("hh");
    var coursePricePattern =/^[0-9]+$/;
   // console.log(namePattern.test(categoryNamePattern.value));
   if(coursePricePattern.test(coursePrice.value))
   {
     addBtn.removeAttribute("disabled");
     coursePrice.classList.add('is-valid');
     coursePrice.classList.remove('is-invalid');
    // nameAlert.classList.add('d-none');//عرفنا الها متغير عشان نمسكها
   }
   else
   {
    // addBtn.disabled="true"; //اي طريقة صح هاي ولا اللي تحتها
    addBtn.setAttribute("disabled" ,"true");
    //courseCategory.classList.replace('is-valid','is-invalid'); //مشكلتها ما اشتغلت لما بلشت اكتب اول حرف صغير
    coursePrice.classList.add('is-invalid');
    coursePrice.classList.remove('is-valid'); //عشان لما اصحح الغلط ما يضل معلق عالحالة
   // nameAlert.classList.remove('d-none');
 }
 }