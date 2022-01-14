console.log("Project-6");
// funtions Dom element to string
function getElement(createparameter){
  let div = document.createElement('div');
  div.innerHTML = createparameter;
  return div.firstElementChild;
}

// Initially countparameter variable
let countparameter = 0;

// hide Default parameterBox
let parameterBox = document.getElementById('parameterBox');
parameterBox.style.display = 'none';

// Parameter click Parameter show
let parameter = document.getElementById('parameter');
parameter.addEventListener('click', ()=>{
  document.getElementById('parameterBox').style.display = 'block';
  document.getElementById('JsonBox').style.display = 'none';
})

// Json click Json show
let json = document.getElementById('json');
json.addEventListener('click', ()=>{
  document.getElementById('JsonBox').style.display = 'block';
  document.getElementById('parameterBox').style.display = 'none';
})

// Add a parameter to click + button
let addParameterBtn = document.getElementById('addParameterBtn');
addParameterBtn.addEventListener('click',()=>{
    let parameterDiv = document.getElementById('parameterDiv');
    let createparameter = `<div class="row my-2">
                              <label for="parameter1" class="col-sm-2 col-form-label"><b>Parameter ${countparameter + 2}</b></label>
                              <div class="col-md-4">
                                <input type="text" class="form-control" id="parameterKey${countparameter + 2}" placeholder="Enter Parameter ${countparameter + 2} Key">
                              </div>
                              <div class="col-md-4">
                                <input type="text" class="form-control" id="parameterValue${countparameter + 2}" placeholder="Enter Parameter ${countparameter + 2} Value">
                              </div>
                              <button class="btn btn-primary deleteParameterBtn" style="width: 40px"> - </button>
                           </div>`
    // convert the element to dom node    
    let parameterElement = getElement(createparameter);
    parameterDiv.appendChild(parameterElement);
    //  Remove Element to - Button
    let deleteParameterBtn = document.getElementsByClassName('deleteParameterBtn');
    for (item of deleteParameterBtn) {
      item.addEventListener('click',(e)=>{
        e.target.parentElement.remove();
      })
    }                
    countparameter++;                         
})

// click on submit
let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
  document.getElementById('code').innerHTML = "Please Wait...... Fetching Response.....";
  // get all user values
  let url = document.getElementById('url').value;
  let requestType = document.querySelector("input[name='requestType']:checked").value;
  let contentType = document.querySelector("input[name='contentType']:checked").value;

  if(contentType == 'parameter'){
    data =  {};
    for(let i=0; i<countparameter+1; i++){
      if (document.getElementById('parameterKey' + (i+1)) != undefined){
        let key = document.getElementById('parameterKey' + (i+1)).value;
        let value = document.getElementById('parameterValue' + (i+1)).value; 
        data[key] = value;  
      }
    }
    data = JSON.stringify(data);
  }
  else{
    data = document.getElementById('JsonBoxText').value;
  }
  console.log(url,requestType,contentType,'data is', data);

  // GET Request https://randomuser.me/api/
  if(requestType == 'GET'){
    fetch(url,{
      method: 'GET',
    }).then(response=> response.text())
    .then((text)=>{
      document.getElementById('code').innerHTML = text;
      Prism.highlightAll();
    })
  }
  // POST Request https://jsonplaceholder.typicode.com/posts
  // JSON.stringify({
  //   title: 'foo',
  //   body: 'bar',
  //   userId: 1,
  // })
  else {
    fetch(url,{
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(response=> response.text())
    .then((text)=>{
      document.getElementById('code').innerHTML = text;
      Prism.highlightAll();
    })
  }
})