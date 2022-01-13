console.log("Project-5");
const data = [
  {
    name: "Himanshu Suratiya",
    age: 23,
    city: "Delhi",
    framework: "Django",
    language: "javascript",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    experience: "2 Years",
  },

  {
    name: "Shivam Raja",
    age: 28,
    city: "UttarPardesh",
    framework: "Angular",
    language: "C++",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    experience: "6 Months",
  },

  {
    name: "Abhishek",
    age: 25,
    city: "Delhi",
    framework: "Bootstrap",
    language: "ReactNative",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    experience: "3 Years",
  },

  {
    name: "Mayank",
    age: 52,
    city: "Haryana",
    framework: "symfony",
    language: "phython",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    experience: "18 Years",
  },

  {
    name: "samiksha",
    age: 23,
    city: "United State",
    framework: "Jquery",
    language: "java",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    experience: "4 Years",
  },

  {
    name: "khushi",
    age: 19,
    city: "Banglore",
    framework: "Angularjs",
    language: "C,c++",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    experience: "9 Months",
  },

  {
    name: "Lalita Devi",
    age: 34,
    city: "Delhi",
    framework: "Django,Reactjs,Bootstrap",
    language: "javascript,c,c++,phython",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    experience: "7 Years",
  },

  {
    name: "Karan",
    age: 28,
    city: "singapore",
    framework: "Django,.net,Html,Css",
    language: "javascript,Native Php",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    experience: "3.5 Years",
  },

  {
    name: "Sahil",
    age: 24,
    city: "maharastra",
    framework: "ReactJs,ReactNative,Angularjs",
    language: "C,C++,javascript,java",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    experience: "3 Years",
  },

  {
    name: "Priya",
    age: 33,
    city: "United State",
    framework: "Next.js",
    language: "PHP",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    experience: "5 Years",
  },

  {
    name: "Tanushka",
    age: 35,
    city: "Shimla",
    framework: "Vue.js",
    language: "Html,css,Lua",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    experience: "4 Years",
  },

  {
    name: "Amit Shukla",
    age: 55,
    city: "mumbai",
    framework: "Ruby,flask",
    language: "Html,css,Lua,Go,peri",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    experience: "13 Years",
  },

  {
    name: "Rashmi",
    age: 39,
    city: "tamil Nadu",
    framework: "Meteor,codelgnitor",
    language: "tcl,haskell,c++",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    experience: "6 Years",
  },

  {
    name: "varun singh",
    age: 36,
    city: "dubai",
    framework: "Html,css,angular.js,cakephp",
    language: "javascript,python",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    experience: "7 Years",
  }
];

function cvIterator(profiles){
    let nextindex = 0;
    return {
        next: function(){
            return nextindex<profiles.length?
            { value: profiles[nextindex++], done: false }:
            { done: true}
        }
    }
}
const candidate = cvIterator(data);
nextCv();

const next = document.getElementById('next');
next.addEventListener('click', nextCv)


function nextCv(){
    let space = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp';
    let sspace = '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp';
    const currentCandidate = candidate.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined) {
    image.innerHTML = `<img src="${currentCandidate.image}">`
    let st = image.children[0];
    st.setAttribute('style','border-radius: 5px')
    profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item list-group-item-primary"><b>Name:</b> <b>${space}${currentCandidate.name}</b></li>
                            <li class="list-group-item list-group-item-primary"><b>Age:</b> ${space} &nbsp <b>${currentCandidate.age}</b></li>
                            <li class="list-group-item list-group-item-primary"><b>City:</b> ${space} &nbsp <b>${currentCandidate.city}</b></li>
                            <li class="list-group-item list-group-item-primary"><b>Framework:</b> ${sspace}<b>${currentCandidate.framework}</b></li>
                            <li class="list-group-item list-group-item-primary"><b>Language:</b> ${sspace} &nbsp <b>${currentCandidate.language}</b></li>
                            <li class="list-group-item list-group-item-primary"><b>Experience:</b> ${sspace} <b>${currentCandidate.experience}</b></li>
                        </ul>`
    }
    else{
        alert('End of Candidates Applications');
        window.location.reload();
    }
}