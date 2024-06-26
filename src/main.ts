//  <==== #Assignments 1 Install Node.js, TypeScript and VS Code ====>
console.log(`Already Completed!`);

//  <=======================>
//  <==== #Assignments 2 Personal Message: ====>

let personName:string="Zane";
console.log(`Hello ${personName}, would you like to have some cake?`);

//  <=======================>
//   <==== #Assignments 3 Name Cases: ====>

let Name:string="zAnE blAck";
console.log(`LowerCase: `,Name.toLowerCase());
console.log(`UpperCase: `,Name.toUpperCase());
console.log("TitleCase: ",Name.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()));

//  <=======================>
//   <==== #Assignments 4 Famous Quote: ====>

let author:string=`George Bernard Shaw`;
let quote:string=`"Cricket is a game played by 11 fools and watched by 11,000 fools"`
console.log(`${author} one said, ${quote}`);

//  <=======================>
//   <==== #Assignments 5 Famous Quote 2 ====>

let famousPerson:string=`George Bernard Shaw`;
let message1:string=`${famousPerson} once said,"Cricket is a game played by 11 fools and watched by 11,000 fools"`
console.log(message1)

//  <=======================>
//  <==== #Assignments 6 Stripping Names:====>

let personname:string="\n\t    Zane Black\t\n";
console.log(`"Original": `,personname)
console.log(`"Stripped": `,personname.trim())

//  <=======================>
//  <==== #Assignments 7 Number Eight: ====>

console.log(5 + 3);
console.log(11 - 3);
console.log(8*1);
console.log(24/3);

//  <=======================>
//  <==== #Assignments 8 ====>

//  Done in Assignment 7!

//  <=======================>
//  <==== #Assignments 9 Favorite Number:====>

// Author: Mustafa
// Date: 4/11/2024
/* Description: Storing my favorite number in a variable. Then, using that variable and creating a message that reveals my favorite number.*/
let favouriteNumber:number=27;
console.log(`${favouriteNumber} is my favourite number.`)

//  <=======================>
//  <==== #Assignments 10 Adding Comments: ====>

//                  /\
// In assignment 9  | an 11 |
//                         \/

//  <=======================>
//  <==== #Assignments 11 ====>

// Author: Mustafa
// Date: 4/11/2024
/* Description: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.*/
// Method 1:
let friendNames1:string[]=['Zane','Micheal','Dave','John']
console.log(friendNames1[0]);
console.log(friendNames1[1]);
console.log(friendNames1[2]);
console.log(friendNames1[3]);
// Method 2:
for(let i=0;i<friendNames1.length;i++){
    console.log(friendNames1[i])
}

//  <=======================>
//  <==== #Assignments 12 Greetings: ====>

// Method 1:
let friendNames2:string[]=['Zane','Micheal','Dave','John']
for(let i=0;i<friendNames2.length;i++){
    console.log(`Hello ${friendNames2[i]}, wanna hangout at my place tonight?`)
}
// Method 2:
let message:string=`wanna hangout at my place tonight?`;
console.log(friendNames2[0]+" "+message);
console.log(friendNames2[1]+" "+message);
console.log(friendNames2[2]+" "+message);
console.log(friendNames2[3]+" "+message);

//  <=======================>
//  <==== #Assignments 13 Your Own Array: ====>

let transportation:string[]=["Honda Motorcycle","Audi","Lexus"]
transportation.forEach((elements)=>{console.log(`I would like to own a a ${elements}`)});

//  <=======================>
//  <==== #Assignments 14 Guest List:====>

let GuestList0:string[]=['Zane','Micheal','Dave','John']
GuestList0.forEach((element)=>{
    console.log(`Hello ${element}, wanna have dinner at my place tonight?`);
})

// <=======================>
// <==== #Assignments 15 Changing Guest List:====>

let GuestList1:string[]=['Zane','Micheal','Dave','John']
let randomguest0:number=Math.floor(Math.random()*GuestList1.length)
console.log(`\nOh no looks like ${GuestList1[randomguest0]} wont be able to have  dinner at my place.\n`);
let newInvitee0:string='Mike';
GuestList1[randomguest0]=newInvitee0;
GuestList1.forEach((element)=>{
    console.log(`Hello ${element}, wanna have dinner at my place tonight?`);
});

//  <=======================>
//  <====  #Assignments 16 More Guests: ====>

let GuestList2:string[]=['Zane','Micheal','Dave','John']
let randomguest1:number=Math.floor(Math.random()*(GuestList2.length))
let newInvitee1:string='Mike';
GuestList2[randomguest1]=newInvitee1;
GuestList2.forEach((element)=>{
    console.log(`Hello ${element}, I have ordered a bigger table so i am inviting more people.`);
});
console.log('\n')
let moreGuest0:string[]=["Williams","Chad","Henry"];
GuestList2.push(moreGuest0[0]);
GuestList2.unshift(moreGuest0[1]);
GuestList2.splice(Math.floor(GuestList2.length/2),0,moreGuest0[2])
GuestList2.forEach((element)=>{
    console.log(`Hello ${element}, wanna have dinner at my place tonight?`);
})
//  <=======================>
//  <====  #Assignments 17 Shrinking Guest List: ====>

let GuestList3:string[]=['Zane','Micheal','Dave','John']
let randomguest2:number=Math.floor(Math.random()*(GuestList3.length))
let newInvitee2:string='Mike';
GuestList3[randomguest2]=newInvitee2;
let moreGuest1:string[]=["Williams","Chad","Henry"];
GuestList3.push(moreGuest1[0]);
GuestList3.unshift(moreGuest1[1]);
GuestList3.splice(Math.floor(GuestList3.length/2),0,moreGuest1[2])
console.log(`\nSorry my table will not be delivered in time so only two people can be invited for dinner.\n`)
for(let i=-GuestList3.length;GuestList3.length>2;i++){
    let index:number=Math.floor(Math.random()*(GuestList3.length))
    if(index>GuestList3.length-1){
        index=GuestList3.length-1
    }
    console.log(`Sorry ${GuestList3[index]}, I can't invite you to dinner.`)
    GuestList3.splice(index,1)
}
console.log(`\n`)
GuestList3.forEach((element)=>{
    console.log(`Hello ${element}, You are still invited for dinner.`);
})
for(let i=-GuestList3.length;i<=GuestList3.length;i++){
    GuestList3.pop()
}
console.log(`GuestList:`, GuestList3)

//  <=======================>
//  <==== #Assignments 18 Seeing the World:====>

let placestovisit:string[]=['Japan','Rome','Barcelona','New York','London'];
//Original Array:
console.log(`Original Order:`,placestovisit);
// In alphabetical order without modifying the actual list:
console.log('Alphabetical order without modifying the actual list:',[...placestovisit].sort());
//Array is still in its original order:
console.log('Array is still in its original order:',placestovisit);
//Array in reverse alphabetical order without changing the order of the original list:
console.log('Reverse alphabetical order without modifying the actual list:',[...placestovisit].sort().reverse());
//Array is still in its original order:
console.log('Array is still in its original order:',placestovisit);
//Reverse the order of your list:
placestovisit.reverse();
//Print the array to show that its order has changed:
console.log('Reversed[Original array] to Change order:',placestovisit);
//Reverse the order of your list again:
placestovisit.reverse();
//Print the list to show it’s back to its original order:
console.log('Reversed[Original array] to original order',placestovisit);
//Sort your array so it’s stored in alphabetical order.
placestovisit.sort();
// Print the array to show that its order has been changed.
console.log('Sorted[Original array] to alphabetical order:',placestovisit);
//Sort to change your array so it’s stored in reverse alphabetical order:
placestovisit.sort((a,b)=>b.localeCompare(a));
// Print the array to show that its order has been changed.
console.log('Sorted[Original array] to reverse alphabetical order:',placestovisit);

// <=======================>
// <====  #Assignments 19 Dinner Guests: ====>
let GuestList:string[]=['Zane','Micheal','Dave','John']
let randomguest:number=Math.floor(Math.random()*(GuestList.length))
let newInvitee:string='Mike';
GuestList[randomguest]=newInvitee;
let moreGuest:string[]=["Williams","Chad","Henry"];
GuestList.push(moreGuest[0]);
GuestList.unshift(moreGuest[1]);
GuestList.splice(Math.floor(GuestList.length/2),0,moreGuest[2])
for(let i=-GuestList.length;GuestList.length>2;i++){
    let index:number=Math.floor(Math.random()*(GuestList.length))
    if(index>GuestList.length-1){
        index=GuestList.length-1
    }
    GuestList.splice(index,1)
}
console.log(GuestList)
console.log(`Only ${GuestList.length} people will be invited to dinner.`);

//  <=======================>
//  <====  #Assignments 20 program that creates a list====>

let country0:string[]=["China","india","Japan","Pakistan","Saudia Arab"];
console.log("List of country: ")
console.log(country0)

//  <=======================>
//  <====  #Assignments 21 program that creates an Object====>

const person:{name:string;fname:string;age:number;walk():void}={
    name:'Mustafa',
    fname:'Mustafa Ghaffar',
    age:15,
    walk():(void){
        console.log(`${this.name} is walking.`)
    }
}
console.log(person);

//  <=======================>
//  <==== #Assignments 22 Intentional Error: ====>

const country1:string[]=["China","india","Japan","Pakistan","Saudia Arab"];
// console.log(country{3});
console.log(country1[3]);

//  <=======================>
//  <====  #Assignments 23 Conditional Tests: ====>

let age1:number= 15;
console.log("Is age = 15? I predict True.");
console.log(age1 == 15);
let IQ:number=130;
console.log("Is IQ = 130? I predict True.");
console.log(IQ== 130);
let car:string='Supra';
console.log("Is car = 'Supra'? I predict True.");
console.log(car== 'Supra');
let height:string='167cm';
console.log("Is height = '167cm'? I predict True.");
console.log(height== '167cm');
let weather:string='sunny';
console.log("Is weather = 'sunny'? I predict True.");
console.log(weather== 'sunny');
age1= 16;
console.log("Is age = 15? I predict False.");
console.log(age1 == 15);
IQ=110;
console.log("Is IQ = 130? I predict False.");
console.log(IQ== 130);
car='Lexus';
console.log("Is car = 'Supra'? I predict False.");
console.log(car== 'Supra');
height='165cm';
console.log("Is height = '167cm'? I predict False.");
console.log(height== '167cm');
weather='Rainy';
console.log("Is weather = 'sunny'? I predict False.");
console.log(weather== 'sunny');

//  <=======================>
//  <====  #Assignments 24 More Conditional Tests: ====>

let name='Mustafa';
let number0=10;
console.log(`Is 'Mustafa'='Musafa'? I pridict False`);
console.log((name=='Musafa'));
console.log(`Is 'Mustafa'='Mustafa'? I pridict False`);
console.log((name=='Mustafa'));
console.log(`Is 'Mustafa'='mustafa'? I pridict False`);
console.log((name=='mustafa'));
console.log(`Is 10=10? I pridict True.`);
console.log(number0==10)
console.log(`Is 10=11? I pridict False.`);
console.log(number0==11)
console.log(`Is 10>11? I pridict False.`);
console.log(number0>11);
console.log(`Is 10<11? I pridict True.`);
console.log(number0<11)
console.log(`Is 10>=10? I pridict True.`);
console.log(number0>=10);
console.log(`Is 10<=11? I pridict True.`);
console.log(number0<=11);
let age2=60
if(age2>18||age2==18){
    console.log(`You are an Adult.`);
}
if(age2>40&&age2<80){
    console.log(`You are an between 40-80.`);
}else{
    console.log(`You are under 40 or over 80.`);
}

let array:string[]=["China","india","Japan","Pakistan","Saudia Arab"];
if(array.includes('China')){
    console.log("Includes China");
}else{
    console.log("Does not includes China");
}
if(!array.includes('America')){
    console.log("Does not includes America");
}else{
    console.log("Includes America");
}

//  <=======================>
//  <====  #Assignments 25 Alien Colors #1: ====>

// passes the if test
let alien_color0 ='green';
if(alien_color0 =='green'){
    console.log(`Player earned 5 points.`)
}
// Fails the if test
let alien_color1 ='red';
if(alien_color1 =='green'){
    console.log(`Player earned 5 points.`)
}

//  <=======================>
//  <====  #Assignments 26 Alien Colors #2: ====>

// runs the if block
let alien_color2 ='green';
if(alien_color2 ==='green'){
    console.log(`Player earned 5 points.`)
}else{
    console.log(`Player earned 10 points.`)
}
// runs the else block:
let alien_color3 ='red';
if(alien_color3 ==='green'){
    console.log(`Player earned 5 points.`)
}else{
    console.log(`Player earned 10 points.`)
}

//  <=======================>
//  <====  #Assignments 27 Alien Colors #3: ====>

// GREEN color
let alien_color4 ='green';
if(alien_color4 ==='green'){
    console.log(`Player earned 5 points.`)
}else if(alien_color4 ==='yellow'){
    console.log(`Player earned 10 points.`)
}else if(alien_color4 ==='red'){
    console.log(`Player earned 15 points.`)
}
// YELLOW color
let alien_color5 ='yellow';
if(alien_color5 ==='green'){
    console.log(`Player earned 5 points.`)
}else if(alien_color5 ==='yellow'){
    console.log(`Player earned 10 points.`)
}else if(alien_color5 ==='red'){
    console.log(`Player earned 15 points.`)
}
// RED color
let alien_color ='red';
if(alien_color ==='green'){
    console.log(`Player earned 5 points.`)
}else if(alien_color ==='yellow'){
    console.log(`Player earned 10 points.`)
}else if(alien_color ==='red'){
    console.log(`Player earned 15 points.`)
}

//  <=======================>
//  <====  #Assignments 28 Stages of Life: ====>

let age:number=15;
if(age<2){
    console.log("person is a baby")
}else if (age>=2&&age<4){
    console.log("person is a toddler")
}else if(age>=4&&age<13){
    console.log("person is a kid")
}else if(age>=13&&age<20){
    console.log("person is a teenager")
}else if(age>=20&&age<65){
    console.log("person is an adult")
}else if(age>=65){
    console.log("person is an elder")
}

//  <=======================>
//  <====  #Assignments 29  Favorite Fruit:====>

let favorite_fruits:string[]=["Watermelon","Apple","Grapes","bananas","Dates"]
if(favorite_fruits.includes('Watermelon')){console.log('I love Watermelons')};
if(favorite_fruits.includes('Grapes')){console.log('I love Grapes')};
if(favorite_fruits.includes('Apple')){console.log('I love Apples')};
if(favorite_fruits.includes('bananas')){console.log('I love bananas')};
if(favorite_fruits.includes('Dates')){console.log('I love Dates')};

//  <=======================>
//  <====  #Assignments 30 Hello Admin: ====>

let profiles1:string[]= ['Zane', 'Micheal', 'Admin', 'Dave', 'John'];
profiles1.forEach((element) => {
    if (element === 'Admin') {
        console.log(`\nHello [${element}], would you like to see a status report?\n`);
    }
    else {
        console.log(`Hello ${element}, thank you for logging in again.`)
    }
});

//  <=======================>
//  <==== #Assignments 31 ====>

let profiles:string[]= [];
if(profiles.length==0){
    console.log(`\n\t<===| We need to find some users! |===>\n`)
}else{
    profiles.forEach((element) => {
        if (element === 'Admin'||element === 'admin') {
            console.log(`\nHello [${element}], would you like to see a status report?\n`);
        }
        else {
            console.log(`Hello ${element}, thank you for logging in again.`)
        }
    });
}

//  <=======================>
//  <====  #Assignments 32 Checking Usernames: ====>

const current_users:string[]=['Zane', 'Micheal', 'Admin', 'Dave','Williams', 'John',"LUKE"];
const new_users:string[]=['Zane', 'Micheal', 'Williams', 'Chad', 'JOHN','Mike',"luke"];
new_users.forEach((newname)=>{
        let currentUsers=current_users.map((name)=>{
            return name.toLowerCase();
        })
        if(currentUsers.includes(newname.toLowerCase())){
            console.log(`You need to enter a new username "${newname}" is not available.`)
        }else{
            console.log(`Username "${newname}" Available`)
        }
})

//  <=======================>
//  <====  #Assignments 33 Ordinal Numbers:  ====>

const number:number[]=[1,2,3,4,5,6,7,8,9];
number.forEach((number)=>{
        if(number===1){
            console.log(number+`st`)
        }else if(number===2){
            console.log(number+`nd`)
        }else if(number===3){
            console.log(number+`rd`)
        }else if(number===4){
            console.log(number+`th`)
        }else if(number===5){
            console.log(number+`th`)
        }else if(number===6){
            console.log(number+`th`)
        }else if(number===7){
            console.log(number+`th`)
        }else if(number===8){
            console.log(number+`th`)
        }else if(number===9){
            console.log(number+`th`)
        }
})

//  <=======================>
//  <====  #Assignments 34 Pizzas: ====>

const pizzas0:string[]=["Pepperoni","Margarita","Cheese"];
for(let pizza of pizzas0){
    console.log(`I like ${pizza} Pizza!`)
}
console.log(`\nI really love Pizza!`);

//  <=======================>
//  <====  #Assignments 35 Animals: ====>

const pizzas:string[]=["Cat","Chinchilla","Hamsters"];
for(let pizza of pizzas){
    console.log(`A ${pizza} would make a great pet!`)
}
console.log(`\nAll all these animals are super adorable!`);

//  <=======================>
//  <====  #Assignments 36 T-Shirt: ====>

function make_shirt(size:string,print:string):void{
    console.log(`Shirt Size: ${size}, With  Print: "${print}"`)
}
make_shirt("large","I love TYPESCRIPT!");
make_shirt("large","I love JAVASCRIPT!");

//  <=======================>
//  <==== #Assignments 37 Large Shirts:====>

function make_Shirt(size:string='Large',print:string="I love TYPESCRIPT!"):void{
    console.log(`Shirt Size: ${size}, With  Print: "${print}"`)
}
make_Shirt();
make_Shirt("Medium");
make_Shirt('Small','I Love JavaScrip!')

//  <=======================>
//  <====  #Assignments 38 Cities: ====>

// //china has the most cities(707)
function describe_city(cityname:string,citycountry:string="China"){
    let Titlecasecity=cityname.trim().charAt(0).toUpperCase()+cityname.trim().slice(1).toLowerCase();
    let TitlecaseCountry=citycountry.trim().charAt(0).toUpperCase()+citycountry.trim().slice(1).toLowerCase();
        console.log(`${Titlecasecity} is in ${TitlecaseCountry}`)
}
describe_city("Beijing");
describe_city("London","England");
describe_city("   KaRachi  ","  \t paKisTan   ");

//  <=======================>
//  <====  #Assignments 39 City Names: ====>

function city_country(city:string,country:string){
    let Titlecasecity=city.trim().charAt(0).toUpperCase()+city.trim().slice(1).toLowerCase();
    let TitlecaseCountry=country.trim().charAt(0).toUpperCase()+country.trim().slice(1).toLowerCase();
    return `"${Titlecasecity},${TitlecaseCountry}"`;
}
console.log(city_country("  \n lAhoRe  ","   PakIsTaN \n  "));
console.log(city_country("   KaRachi  ","  \t paKisTan   "));
console.log(city_country("  \t Beijing  \n","   cHinA   "));

//  <=======================>
//  <====  #Assignments 40 Album: ====>

function make_album(artist_name:string,album_title:string,trackNumber?:number){
    if(trackNumber!==null&&trackNumber!==undefined){
        return {artist_name:artist_name,album_title:album_title,TrackNumber:trackNumber};
    }else{
        return {artist_name:artist_name,album_title:album_title};
    }
}
console.log(make_album("Lan Del Ray","Lust for life"));
console.log(make_album("Taylor Swift","Reputation"));
console.log(make_album('Taylor Swift',"1989",21));

//  <=======================>
//  <====  #Assignments 41 Magicians: ====>

let magiciansNames0:string[]=["   HaRry houDIni    ","David Blaine","Derren Brown"];
function showMagician0(array:string[]){
    array.forEach(name=>console.log(name.trim().charAt(0).toUpperCase()+name.trim().toLowerCase().slice(1)));
}
showMagician0(magiciansNames0);

//  <=======================>
//  <==== #Assignments 42 Great Magicians: ====>
let magiciansNames1:string[]=["   HaRry houDIni    ","David Blaine","Derren Brown"];
function make_Great1(array:string[]):void{
    magiciansNames1=array.map((names)=>{
        return `Great ${(names.trim().charAt(0).toUpperCase()+names.trim().toLowerCase().slice(1)).replace(/\b\w/g,c=>c.toUpperCase())}`;
    })
}
make_Great1(magiciansNames1);
function showMagician1(array:string[]){
    array.forEach(name=>console.log(name));
}
showMagician1(magiciansNames1);

//  <=======================>
//  <====  #Assignments 43 Unchanged Magicians: ====>

let magiciansNames2:string[]=["   HaRry houDIni    ","David Blaine","Derren Brown"];
let newarray:string[]=[];
function make_Great(array:string[]):void{
    newarray=array.map((names)=>{
        return `Great ${(names.trim().charAt(0).toUpperCase()+names.trim().toLowerCase().slice(1)).replace(/\b\w/g,c=>c.toUpperCase())}`;
    })
}
make_Great(magiciansNames2);

function showMagician(array:string[]){
    array.forEach(names=>console.log((names.trim().charAt(0).toUpperCase()+names.trim().toLowerCase().slice(1)).replace(/\b\w/g,c=>c.toUpperCase())));
}
console.log("\nOriginal Array:\n");
showMagician(magiciansNames2);
console.log("\nChanged Array:\n");
showMagician(newarray);

//  <=======================>
//  <====  #Assignments 44 ====>

function make_sandwich(...items:string[]){
    console.log(`\nSandwich order:\n`)
    items.forEach((item)=>{console.log(`-${item}`)})
}
make_sandwich("Letus","Chicken","bread","tomatoes","mayoniese");
make_sandwich("Letus","Chicken","bread","thoudsand island");
make_sandwich("Chicken","bread","tomatoes","mayoniese");

//  <=======================>

type car={
    [Key:string]:any
    manufacturer:string,
    model:string,
}
//  <====  #Assignments 45 ====>
function Carinfo(manufacturer:string,model:string,optional?:Record<string,any>):car{
    return {
        manufacturer,
        model,
        ...optional
    };
}
const mycar=Carinfo("BMW","X1 SUV",{color:"Blue",year:'2019'});
console.log(mycar);

//  <=======================>
