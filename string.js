/**
 * string koi vabe likha jai
 * (`  `) eta dea string declear kore ,atake bole "backtic"
 * string onekta array er moto
 * length method er kaj holo array te
 * koita jaiga nise ta dekhe
 */

const country = "bangladesh";
const division = "Newkhale";
const district = `B-Baria`;

//ata object
const thana = new String("demra");

console.log(typeof country);
console.log(typeof division);
console.log(typeof district);
console.log(typeof thana);

//array length use kore index er element count kora jai

const number = [54, 98, 78, 21, 65];
console.log("Array element", typeof number[0]);

/**
 * string similerly count korche
 */
console.log(district.length);
//length borno dekhe na, kotutuku jaiga nise ta dekhe
const capital = "Dha ka";
console.log(capital.length);
//array er moto string eeao element count kora jai
console.log(capital[4]);

/**
 *  Array er element index onujai change kora jai
 * tai ata ke bole mutable mane  changeable
 */

number[2] = 11;
console.log("Array element", number);

/**
 *  string er letter element onujai change kora jai na
 *  tai ata ke bole immutable mane not changeable
 */
capital[4] = "L";
console.log("string letter", capital);
