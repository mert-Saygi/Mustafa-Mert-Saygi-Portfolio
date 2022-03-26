project1 = "charging_cart"
project2 = "sdc_testing"
project3 = "robotics_frame"
project4 = "thruster_guards"
project6 = "gymi_podcast"
project7 = "sel"
project8 = "shooting_game"
project9 = "pro_climber"
project10 = "speedometer"
project11 = "tp"
project12 = "space_race"
project13 = "gifgaf"
project14 = "mainlv"
project15 = "seven"
project16 = "accumulator"
project17 = "motor_spin"
project18 = "sdc"
project19 = "bspd"
project20 = "coil_winder"

function on(event, clicked_id) {
    if (event.target.id != "click"){
      document.getElementById("overlay").style.display = "flex";
      val = clicked_id.replace ( /[^\d.]/g, '' );
      card(val);
    }
  }

  function off(event) {
    if (event.target.id == "overlay") {
      document.getElementById("overlay_card").scrollTop = 0;
      document.getElementById("overlay").style.display = "none";
    }
  }

  function card(val) {
    projectName = window["project" + val];
    projectText = window["text" + val];
    document.getElementById("overlay_img1").src="assets/images/" + projectName + "/img1.jpeg";
    document.getElementById("overlay_img2").src="assets/images/" + projectName + "/img2.jpeg";
    document.getElementById("overlay_img3").src="assets/images/" + projectName + "/img3.jpeg";
    document.getElementById("overlay_title").innerHTML= projectText[0];
    document.getElementById("overlay_description").innerHTML= projectText[1];

    del_list = document.getElementById("skills_list");
    del_list.remove();

    list_main = document.createElement("ul");
    list_main.setAttribute('id',"skills_list");

    list_length = projectText[2].length;
    for (i=0; i < list_length; i++) {
      list_item = document.createElement("li");
      list_text = document.createTextNode(projectText[2][i]);
      list_item.appendChild(list_text);
      list_main.appendChild(list_item);
    }
    list_loc = document.getElementById("list_loc");
    list_loc.appendChild(list_main);

    if (document.getElementById("image2").classList.contains("active")){
      document.getElementById("image2").classList.remove("active");
      document.getElementById("image1").classList.add("active");
    }
    if (document.getElementById("image3").classList.contains("active")){
      document.getElementById("image3").classList.remove("active");
      document.getElementById("image1").classList.add("active");
    }
    
    document.getElementById("overlay_difficulty").innerHTML= projectText[3];
    document.getElementById("overlay_date").innerHTML= projectText[4];


  }

function enlarge(element){
  element.style.transform = "scale(1.02)";
}
function shrink(element){
  element.style.transform = "scale(1.0)";
}

function icon(x){
  if (x.getAttribute("closed") == "true") {
    document.getElementById("icon").setAttribute("d", "M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z")
    x.setAttribute("closed", "false");
  }
  else {
    document.getElementById("icon").setAttribute("d", "M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z")
    x.setAttribute("closed", "true");
  }
 
}


  //Overlay Card Text
text1 = ["FSAE Charging Cart", 
          "I designed this charging cart for the Columbia University Formula SAE club. It will be used when the battery pack of the accumulator for the electric vehicle is being charged.\
          The cart is designed to house an El Con PFC5000 charging unit vertically as well as all of the charging circuitry on a \"Low Voltage Shelf\". The main platform of the cart will\
          be fitted to mount the accumulator of the EV, which must be removed from the actual car as it is charging per the FSAE competition rules. All of these mounts were manufactured from\
          Plywood and Balsa, depending on the weight that the wood will be carrying. Furthermore, I designed a dead man's brake system for the cart which will automatically stop the cart from moving\
          when an operator is not using it. This system is designed as a gear-shaped extension to the wheels along with a handle that falls between the teeth of the gears to stop the wheels from\
          turning. The gears will be water jetted from an aluminum block and the handle will be manufactured out of steel rods and PVC pipes. After I had designed every component of the cart on SolidWorks\
          in November, I started the manufacturing process leading a team of 2 other members of the club.", 
          ["SolidWorks (CAD)", "Sawing", "Drilling", "Water Jetting", "Teamwork & Communication"],
          "The cart that the team had purchased for this job was very small. In fact, it was smaller than the actual accumulator that it was meant to house. In order to fit the accumulator and the charger\
          on the cart, I really had to use a lot of spatial thinking and use all 3 dimensions of the cart available. However, this meant that I had to use stronger and thicker wood which made the manufacturing\
          process more difficult and expensive. This project was all about finding the balance between space, strength, and cost.",
          "September 2021 - Current"];

text2 = ["FSAE Shutdown Circuit Testing PCB", 
          "I designed a PCB that will be used to test the functionality of the Shutdown Circuit (SDC) and the Brake System Plausibility Device (BSPD) of the Columbia University Formula SAE club's electric vehicle. In short,\
          the SDC cuts power to the vehicle when a fault is detected that could be harmful to the driver, and the BSPD is a system that verifies the functionality of the brake and accelerator pedal. The testing PCB that I\
          designed will allow the team to test these two circuits independently of the rest of the car, with the circuits receiving simulated sensor signals through switches and potentiometers. In order to design this PCB, I had to\
          gain a complete understanding of both circuits and their physical PCBs. Then, I had to determine the most efficient way to simulate each sensor as a simple electronic component. Once I had all of this information, I\
          drew up a schematic on KiCad, verified the circuit's functionality with LTSpice simulation, and when I was finally pleased with the circuit, I designed the PCB for it on KiCad trying to make it as compact and logical\
          as possible. Once the SDC and BSPD circuits are assembled and ready, they will be tested on this PCB.",
          ["KiCad (PCB Design)", "LTSpice", "Electronics Testing", "Oscilloscopes"], 
          "The biggest difficulty that I faced doing this project was gaining a complete understanding of the SDC and BSPD circuits. I had taken this project on in the first week of joining the Columbia FSAE team and was not familiar\
          with these specific PCB designs yet. The documentation explaining the circuits was very lackluster and all I was given was a very generalized flow chart. As there were only a couple experienced members on the team and they\
          had their own projects to worry about, a majority of my time at the beginning of this project was spent sieving through the KiCad files of the circuits, trying to understand the flow of each signal in, through, and out of\
          both boards. After this process, coming up with a design for the circuit and PCB was relatively easier.",
          "September 2020 - November 2021"];

text3 = ["Robotics Club MATE ROV Robot Frame", 
          "Using SolidWorks and documentation of past designs, I created a CAD model, manufactured, and assembled the physical frame of the Columbia University Robotics Club's robot for the MATE ROV competition with the help of other\
          members of the mechanical engineering team. The MATE ROV competition is an underwater remotely operated vehicle challenge. Since our robot is meant to be easily maneuvered in water to complete timed tasks, I tried to minimize\
          the surface area of materials to allow water to flow through the robot with ease and reduce its coefficient of friction. As a team, we decided to use a cube-shaped design, as an upgrade from the previous year's rectangular prism\
          design, to make the thruster control more symmetrical across the robot and simplify the algorithm controlling them. After designing the robot in SolidWorks and testing the structural strength with an FEA analysis, it was time for\
          production. We decided to use high density polyethelyne for the frame since the acrylic that was previously used was too weak and developed cracks. The denser HDPE material also solved the sinking problem that the team had previously\
          encountered. The panels of the frame were cut using a water jet and assembled with nuts, bolts, and L brackets." ,
          ["SolidWorks (CAD)", "FEA Analysis", "Water Jetting", "Communication"],
          "The biggest difficulty in the project was figuring out the ideal orientation and positioning for the thrusters to maximize speed while offering an easy and logical algorithm to control them on the software end. This problem took a lot\
          of meetings with the software team, understanding how the force vectors of the thrusters would cooperate, and discussion within the mechanical team to determine weight distribution and maintain the center of mass in the geometric center\
          of the robot. Finally, we decided as a team to use four thrusters to provide up/down movement, and four thrusters on each angled panel to provide forward/backward/lateral/diagonal acceleration.",
          "September 2021 - December 2021"];  

text4 = ["Robotics Club MATE ROV Thruster Guards", 
          "I used SolidWorks and Ultimaker Cura to design and 3D print guards for the front and the back of the thrusters of the Columbia University Robotics Club's robot for the MATE ROV competition. The MATE ROV competition is an underwater remotely operated vehicle challenge.\
           The primary purpose of these guards is to prevent objects\
          from coming in contact with the blades of the thruster during competition, which could potentially damage our thruster, giving us no control of our robot. The main design of the thruster is a simple circle with a grid pattern as the guards\
          and a circular opening in the center to fit the nose of the thrusters. However, the\
          mounting points of the guards were the main focus of this design project as there was no clear way to mount both the front and rear guard to the thruster effectively. After agreeing on a design and mounting technique with my teammates from\
          the mechanical engineering team, we started 3D printing them with Ultimaker printers. Then using only screws we mounted them onto the 8 thrusters of our robot." ,
          ["SolidWorks (CAD)", "3D Printing with Cura Ultimaker", "Assembly", "Teamwork"], 
          "The biggest difficulty that I faced during this project, as mentioned above, was figuring out how to mount the guards onto the thrusters. Our initial idea, of hot glue, failed instantly as there was a very small surface area to apply the glue\
          and the water significantly weakened the glue. After going through 4-5 designs for mounting we came up with a design where the front guard would be attached to the nose cone of the thruster using the screw holes that were already present. Then,\
          the rear guard mounts onto the front guard instead of directly onto the thruster using a small green connector piece (as can be seen in the image) on two sides.",
          "October 2021 - December 2022"];

text6 = ["Global Youth Mentorship Initiative: GYMI Some Time Podcast", 
          "As the Vice-President of the Global Youth Mentorship Initiative (GYMI), whose goal is to provide underprivileged children around the world with equal education opportunities, I led a team of 4 members in the creation of the very first GYMI podcast.\
          Our goal with the podcast was to extend our online presence, reach a wider audience, and educate students of all ages on the importance of social and emotional learning. Currently, the podcast has one episode out with the script for multiple others\
          currently being worked on. Alongside being the leader of the team, I am also one of the three authors of the script and also the editor of the podcast, which I accomplish using Garageband. We aim to in the future broaden our audience by publishing episodes\
          in multiple languages, such as Chinese, Spanish, French, and Turkish.",
          ["GarageBand", "Writing", "Leadership", "Teamwork & Communication"],
          "The biggest difficulty that we faced during this project was writing the script in a way that was appropriate for the broad audience that we originally wished to target. To overcome this difficulty, we had to make a couple of changes to the structure of our\
          podcast, which started with redefining our target audience. We decided that although the target audience that we wish to reach are underprivileged students around the world, it would be better to first begin the podcast as primarily for teenage students\
          in the US. Once we get the ball rolling with an efficient system to regularly release podcast episodes, we will think of better approaches to reaching as large an audience as we aspire to.",
          "September 2021 - Current"];

text7 = ["Book Chapter: The Impact of Social and Emotional Learning on Creativity", 
          "I was a research assistant alongside Professor Yildirim from Rice University and Professor Taban from North American University as they investigated the importance of social and emotional learning with the goal to write a book chapter on the topic. After reading through dozens of research papers related to SEL, I\
          suggested that the focus of our book chapter be specifically on the positive effects of SEL on the creativity of students as it was a relatively unexplored topic with interesting implications as many people believed that creativity is innate. For multiple months,\
          I continued to investigate this subject, reading many papers ranging from the 1970s to as recent as 2016. Meanwhile, I had begun the initial draft of what would soon be chapter 9 in the book Creativity as Progressive Pedagogy: Examinations Into Culture, Performance, and Challenges. After refining the\
          chapter for many months, the chapter was finally completed, accepted into the book, and published.",
          ["Research", "Writing", "Attention to Detail", "Communication"],
          "The biggest difficulty that I faced while writing this book chapter was finding recent research papers about the topic. Very few studies have been conducted on SEL, and even virtually none have been conducted on its effect on creativity. For this reason,\
          the research stage of the project was a slow and extensive process. The only real way that I was able to push through this difficulty was by reading fast while still paying attention to every small detail in a research paper that could aid me in my\
          understanding of the impact of SEL on creativity.",
          "January 2021 - September 2021"];

text8 = ["Star Wars Space Shooter Game", 
          "As a project for personal entertainment and developing my game design and coding skills, I decided to make a Star Wars-themed space shooter game. Initially, the project started off as me exploring new JavaScript functions from my Programming for Gamers book.\
          When I discovered how to make an object be controlled by your mouse, I got the idea of attaching the image of a Star Wars spaceship to my mouse. From there I kept getting more and more ideas, starting off with a simple projectile laser, spawning enemies, and music.\
          At this point, I was very absorbed in the project and realized that I was learning a lot more by searching my ideas online than by reading a book. Finally, I added a UI and a leaderboard and decided that it was time to put an end to this project and further advance\
          my coding abilities in other ways.",
          ["HTML", "CSS", "JavaScript", "Game Design"],
          "The biggest difficulty that I faced was in the game design aspect of the project. Although I had an idea of how I wanted the game to work and the general mechanics, I never realized that there were so many intricacies that had to be planned out while making a game.\
          Not having taken any courses on game design at the time I got stuck halfway through my project as I did not know how to implement certain aspects of the game. I spent a lot of time on YouTube and reading articles online about the basics of game design and then coming\
          up with the intricate plan that I should have started off with. Once I overcame this boundary, I was able to continue coding my game.",
          "November 2019 - December 2019"];

text9 = ["CS50: Game Development Final Project (Pro Climbers)", 
          "I designed and developed a 3D platformer game on the Unity game engine inspired by Geometry Dash for the CS50: Game Development course offered by Harvard University. The maps and obstacles were mostly made using ProBuilder and ProGrids whereas the character is a simple first-person character\
          template. The scripts for every obstacle were written in C#. The purpose of the game is to reach the end of each maze to go on to the next level without falling off of the platforms or getting hit by the red shining obstacles. Once the player dies they must restart from the beginning of the very first level. The goal is\
          to make it through the most possible levels without dying. The game also has a basic UI as well which allows the game to be paused and restarted. I combined the game design and coding skills taught in this 11-week course to create this unique game experience. The most rewarding feeling was being\
          able to play my game with a virtual reality headset at the end of the course.",
          ["C#", "Unity", "Game Design", "Game Graphics", "Maze Design"],
          "The biggest difficulty that I faced was merging that first-person character template into my game. Although the template provided me with rudimentary elements such as the hitbox, camera, and player control, these elements did not fit very well into my game at first. I had to look through the thousands of lines of script\
          for the character and understand what each function did in order to fix the bugs present in the game. Some of the faults included the camera existing inside of objects without the hitbox registering anything, friction not applying, first-person camera starting in random angles, and gravity not functioning the same as it did on other objects in the game.",
          "June 2021 - July 2021"];

text10 = ["RC Car Speedometer", 
          "After buying an RC car online, I instantly started imagining how I could modify the vehicle with various upgrades. First I added a POV camera to the vehicle so I could drive around my street from the comfort of my own balcony. Then, I added a lighting setup so that I could continue driving during the night as well. Then, I was curious how fast exactly the car\
          was going, so I decided to use one of my Arduino boards to measure the speed of the car live. I did this by marking the tire with white marks and using an infrared sensor to measure the average time of rotation of the wheels (disregarding any clear outliers). I then displayed the speed of the car on an OLED display that I mounted on the front of the vehicle, just in the view of the camera that I was\
          using to control the vehicle. The speed sensor should decent success as my timed straight line trials with the car showed that the speedometer's measurement was in a very small margin of error. Using some basic mathematics as well, I added a 'distance traveled' calculation as well.",
          ["Arduino", "Coding", "Sensors", "Circuit Design"],
          "The biggest difficulty that I faced with this project was figuring out how I could create the white marks on the tire most efficiently so that the infrared sensor could consistently measure the rotation. I first tried to do this by taping white tape on the wheel (which worked for my low speed test wheel) but did not work with actual road tests as the paper quickly came off. Then, I tried using white-out,\
          which also did not last very long before scraping off of the wheel. Finally, I succeeded by using thick coats of acrylic paint which could be easily reapplied if it started wearing off.",
          "December 2020 - January 2021"];  

text11 = ["Computer Graphics and Design Midterm: Toilet Paper CAD Model", 
          "As the midterm assignment for my Computer Graphics and Design class at Columbia University, I was assigned to create a CAD model of any household object. I decided to model a toilet paper holder due to its many symmetrical and unsymmetrical parts, which would allow me to show off the various modeling techniques that I know. I first started by taking measurements\
          of toilet paper rolls and the toilet paper holders present in my house. After getting a good idea of the general dimensions that I had to keep in mind (ie. length of the roll and diameter of the roll), I then had to figure out how the toilet paper holder would be mounted onto the wall. Once I had a rough sketch of everything on paper, I started drawing each individual\
          part on SolidWorks. Once the full CAD model was complete, I also had to create the engineering drawings for the object. I created engineering drawings of the entire object and every individual part using SolidWorks as well.",
          ["SolidWorks", "CAD", "Engineering Drawings", "Creativity"],
          "The biggest difficulty that I faced doing this project was modeling the curved flap that goes over the toilet paper roll. I wanted this part to be curved to match the largest diameter that a toilet paper starts off with but also have a very small radius curl at the end to be able to slide into play. Making this shape proved very difficult, but I wanted to truly improve\
          my skills on SolidWorks and not just use a simpler design. So I spent a long time painstakingly measuring and calculating the radius and arch length that each curve had to. The final result was the exact design that I had initially came up with, leaving me very satisfied with my work.",
          "May 2021"];

text12 = ["Computer Graphics and Design Final: Space Race!", 
          "As the final assignment for my Computer Graphics and Design class at Columbia University, I was assigned to work with a team of 3 and design a handheld game that would teach young children simple algebra. The first step to this project was researching how children best learn math and what kinds of games they find interesting.\
          After determining that competitive games that have an exciting element of luck were the ones that best kept the attention of children, we started deciding on the specific mechanics of the game. We decided that a snakes and ladders sort of game could be fun with the twist of having to do some sort of addition or subtraction before moving.\
          We decided to use three dice to come up with the equations: two 10-sided dice with numbers and one 6-sided die with a + and - sign on each side. Since our game could not have any loose parts we put these dice into a spinner that would help contain the dice and allow for a fair roll. Then we had to think of a design for the pawns\
          that would make them a part of the game board. We made the game board a track with wedges hidden in the board, and the pawns would have a conical bottom that would easily slip into the wedges. By making the track too narrow for the wide portion of the cones, we were able to make the pawns a part of the board while allowing for free movement along the gameboard.\
          Finally, once we had created sketches of every component of the game, we split up the modeling work evenly between the three of us and started creating them on Solidworks. I was responsible for creating the pawns and the three dice. After the CAD models were completed, we also had to create engineering drawings for the entire game and every\
          single part that made up the game.",
          ["SolidWorks", "CAD", "Engineering Drawings", "Creativity", "Teamwork & Communication"],
          "The most difficult part of this project was creating a track on the gameboard that would efficiently keep the pawn stable and in place while also allowing it to be moved up and down the board. Although we had the general idea that we would use wedges in the tracks and a conical shape for the bottom of the pawn, we had not fully\
          planned out how we would keep the part from falling over side-to-side. Also, in our initial models, the pawns that I had modeled had a bottom that was too large for the wedges that were modeled by my partner, so we had to spend a long Zoom call working together to create parts that complemented each other. Working on this project virtually\
          was truly a large barrier, but with perseverance, my teammates and I created a very successful design.",
          "June 2021"];

text13 = ["Art of Engineering Final: Wack-A-Bobcat", 
          "As the final assignment for my Art of Engineering class at Columbia University, I was assigned to work with a team of 5 classmates to design and build a game. First, we had a long meeting over Zoom where we decided on the type of game that we would create and the exact mechanics of it.\
          We were inspired by Wack-A-Mole, exchanging the mole with a bobcat (NYU's mascot), but with a slightly different objective. Instead of racking up as many points as possible within a time limit, in Wack-A-Mole the goal is to last as long as possible as the bobcats keep coming faster and faster.\
          After deciding how our game would work, we split up the work among our teammates evenly. I was in charge of creating a CAD model of the box that would house the electronics of our game, including the Arduino board, buttons, and the LCD display. Unfortunately, due to our class being virtual, my\
          teammates and I could not come together to actually assemble our project and 3D print the housing that I had modeled. Instead, all of the electronics that we ordered were sent to one of my teammates that lives in the US and she created a makeshift version of the game with a cardboard box.\
          This prototype proved the functionality of our game and was a successful proof of concept of our game.",
          ["SolidWorks", "CAD", "Circuit Design", "Creativity", "Game Design", "Teamwork & Communication"],
          "The biggest difficulty that we faced during this project was working together as a team since there were very large time zone differences between all of our teammates. We had people living in California, North Carolina, Turkey, and China, leaving us all in a spread of 16 hours. To overcome this difficulty\
          we had to efficiently use communication methods such as email and Whatsapp to work as a team. This struggle helped me improve my communication skills and really taught me the importance of concise but precise communication among teammates. Not being able to talk face-to-face or even over Zoom will be a\
          problem that I face in the future as well, and now I am better prepared for it.",
          "November 2020 - December 2020"];

text14 = ["FSAE Main Low Voltage Board Updates and Assembly", 
          "I was responsible for updating the design of the Main Low Voltage board of the Columbia Formula SAE club's electric vehicle. This board is responsible for distributing power to and controlling all of the vehicle's low voltage systems (ie. dashboard, shutdown circuit, etc.). The Main Low Voltage board design that the team currently had was an old one for the 2020 vehicle and needed multiple updates.\
          I cross-referenced the schematic of the PCB with documentation for all of the low voltage systems to verify that each system had the required signals running through the board. For any of the systems that were missing from the old design, I had to incorporate them into the schematic and also the PCB design. It was also important that each signal went to the correct pin type on our C2000 Delfino MCU. After\
          this verification process and update of the PCB, I had to write the code for the MCU to correctly process the incoming signals. This code had to be written from scratch since as a team we wanted to convert all of our old code into MATLAB Simulink code. I am currently working on writing the code for the MCU.",
          ["KiCad (PCB Design)", "Schematic Design", "MATLAB Simulink", "Coding", "Teamwork"],
          "The biggest problem that I encountered during this project was in creating the step-up circuits that would be used to step up the 3.2V output of the C2000 Delfino MCU to 12V as some of our low voltage systems requires this voltage (ie. brake lights). It was difficult to find a relay that was rated correctly for this purpose, especially one that was small enough to fit into the enclosures that we are\
          using to store the circuits in the vehicle. The enclosures are a thin narrow box with a slot to slide the PCB through and the PCB must be a very specific shape and size to be able to fit perfectly. With the help of our electrical engineering advising professor, I was able to change the design of the circuit so that a smaller relay could be used on the PCB.",
          "September 2021 - Current"];

text15 = ["The Eigth Nation (Seven Nation Army Remix)", 
          "I rearranged the song Seven Nation Army by the White Stripes into an electronic piece using Garageband. Having been a pianist and a guitarist since elementary school I had always wanted to learn how to arrange my own music so I decided to teach myself how to use Garageband and made a remix of one of my favorite songs. Making use of the few tools at my disposal, I decided to make an electronic\
          arrangement as I had to viable way of recording my instruments without a lot of background noise. After a lot of discovery and trial and error, I gained a much better understanding of the software and came up with a unique arrangement. I also composed some of my own catchy melodies that I included in the piece.",
          ["Garageband", "Music Arrangement and Production", "Keyboard/Piano"],
          "The biggest difficulty that I had when completing this project was getting the sound that I wanted out of the software. I always had a precise sound in my head that I wanted to put into the piece but due to the almost unlimited options on the software, it was very difficult to achieve the sounds. However, by simply playing around with the software for hours on end, I gained a much better understanding\
          of how the different settings change the sound of an instrument. I also discovered some instruments that I had never even known about that I was more than happy to use in this project as well as some other projects.",
          "January 2021"];
          
text16 = ["FSAE: Accumulator Integration and Assembly", 
          "-",
          ["Crimping", "Soldering", "Electronics Integration", "Electronics Testing", "Assembly", "3D Printing", "High Voltage Wiring"],
          "-",
          "January 2022 - Current"];

text17 = ["FSAE: Motor Spinning Test", 
          "-",
          ["Crimping", "Electronic Circuit Design", "Power Electronics", "Electronics Testing", "Assembly", "High Voltage"],
          "-",
          "November 2021 - December 2021"];

text18 = ["FSAE: Shutdown Circuit Assembly and Independent Testing", 
          "-",
          ["Soldering", "KiCAD", "Electronics Testing", "Assembly", "Oscilloscopes"],
          "-",
          "January 2022"];

text19 = ["FSAE: Brake System Plausibility Device Assembly and Independent Testing", 
          "-",
          ["Soldering", "KiCAD", "Electronics Testing", "Assembly", "Oscilloscopes"],
          "-",
          "March 2022"];

text20 = ["Auto-calibrated Coil Winding System for B0 Magnetic Field Control", 
          "-",
          ["3D Design", "Manufacturing", "Assembly", "Electronics", "Sensor Testing", "3D Printing", "Machining"],
          "-",
          "January 2022 - Current"];