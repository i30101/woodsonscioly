let problems = document.getElementById("problems");
let buttonContainer = document.getElementById("button-container");

test1 = [
    ["During the 2019 Super Bowl, how many seconds were spent by consumers watching Super Bowl ads on YouTube?"],
    ["Since the beginning of the American Music Awards, of all of the “Artist of the Year” winners, how many times has the letter “A” appeared (First and Last Names both count)? Example: Camila Cabello has the letter “A” 3 times."],
    ["How long would it take, in hours, to drive to Jupiter assuming it was a straight path and the person never had to stop in hours?"],
    ["How many registered student organizations are on the University of Michigan- Ann Arbor campus?"],
    ["How much would it cost in US dollars to treat someone with Zynteglo, an FDA approved gene therapy drug to treat beta thalassemia?"],
    ["How many times was COVID, COVID-19, or coronavirus mentioned in 2022 on Reddit?"],
    ["How many rolls of toilet paper would fit inside Buckingham Palace assuming Buckingham Palace were a box and the toilet paper left no gaps between rolls (the tube hole still exists)?"],
    ["What is the number of oxygen atoms in the carbonation of a can of Coca-Cola?"],
    ["How much caffeine does the average college student consume per day in picograms?"],
    ["If I search “foreign” in PubMed, a medical journal database, how many results show up?"],
    ["If I planted an avocado pit and tended to it, assuming it could grow infinitely large, how long would it take to grow to the height of the General Sherman Tree in days?"],
    ["During an Ironman marathon, the average male marathoner burns how many calories in terms of the number of avocado toast servings?"],
    ["If all students on UM's Ann Arbor campus shouted, how loud would the sound be equivalent to the sound produced in decibels?"],
    ["How long, in seconds, would it take a golf ball hit by a professional golfer with a five-iron on average to travel the Nile River assuming it was a straight path and the golf ball traveled straight along the path?"],
    ["In 2019, how many passengers went through Detroit Metropolitan Wayne County Airport (DTW)?"],
    ["If Oscars were made of solid gold and all of the Oscars ever awarded were melted, how much in value would it be in US dollars?"],
    ["If I collected all of the Classic Monopoly games made from 2008 to 2015, how many Monopoly dollars would I have?"],
    ["How many 13-in MacBook Pros would it take to weigh the same amount as a USPS delivery van?"],
    ["How many new pieces of malware are detected each day all over the world?"],
    ["How many different species of frogs are known to live in the Amazon rainforest?"],
    ["How many pounds of fireworks are purchased each year by the general public (not for professional shows)?"],
    ["In the 2022 Winter Olympic and Paralympic Games, how many medals were awarded?"],
    ["Given a loaf of white Wonder Bread, how many carbon atoms make up the sugar content assuming all of the sugars are glucose?"],
    ["What is the mass of everything in the asteroid belt in kilograms?"],
    ["Assuming the Great Pacific Garbage Patch was made out of recyclable plastic and diverted to U.S. recycling facilities, how much of that plastic would end up in landfills in pounds?"],
    ["Assuming an adult Black Iberian Pig was made of pure Plutonium-239, how long would it take to decompose naturally with its half life to the mass of an American penny in years?"],
    ["In the first 24 hours of release, how many streams did Taylor Swift's album “Midnights” get worldwide?"],
    ["How many physical Christmas holiday cards are sent annually across the world?"],
    ["How many rotisserie chickens did Costco sell in 2021?"],
    ["An iPhone 6 is able to perform how many computer instructions per second?"]
];

let notStarted = true;
function start(action) {
    if(action == 0) {
        problems.innerHTML = `<div class=\"bold-text\">You cannot start this test yet. Contact your test proctors for help.</div>`;
    }else if(action == 1) {
        showTest(test1);
    }else {
        problems.innerHTML = `<div class=\"bold-text\">System error. Contact your test proctors for help.</div>`;
    }
}

function showTest(test) {
    if(notStarted) {
        for(let i = 0; i < test.length; i++) {
            problems.innerHTML += `
            <div class=\" problem\" id=\"problems\">
                <div class=\"question bold-text\">${i + 1}. (5.00 points)</div>
                <div class=\"question-text\">${test[i]}</div>
            </div>`
            notStarted = false;
            buttonContainer.innerHTML = "";
        }
    }
}
