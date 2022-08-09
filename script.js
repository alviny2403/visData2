let profileContainer= document.getElementById("newText")
let genRand= document.getElementById("search")

let profileName, 
profileImg, 
profileDOB, 
profileLocation, 
profileEmail, 
profileLogin,
profileRegistered, 
profileCellPhone,
profileBox

fetch("https://randomuser.me/api/?results=50")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data.results[0])
        insertText()

        // Search and filter not complete yet
        let searchBtn= document.getElementById("search")
        searchBtn.onclick= (event)=>{
            event.preventDefault()
//            profileContainer.innerHTML= ""
//
//            let searchText= document.getElementById("input")
//            let searchValue= searchText.value
//
//            for (let i= 0; i< data.results.length; i ++){
//                if (data.results[i].hasOwnProperty(searchValue) == false){
//                    data.results.splice[i, 1]
//                    console.log("1")
//                }
//            }
//
//            insertText()
        }

        function insertText(){
            for (let i= 0; i< data.results.length; i ++){
                profileName= document.createElement("h1")
                profileName.innerHTML= 
                    data.results[i].name.title+ " "+
                    data.results[i].name.first+ " "+
                    data.results[i].name.last

                profileImg= document.createElement("img")
                profileImg.src= 
                    data.results[i].picture.large

                profileDOB= document.createElement("h2")
                profileDOB.innerHTML= "DoB: "+ 
                    data.results[i].dob.date+ "&emsp; Age: "+ 
                    data.results[i].dob.age

                profileLocation= document.createElement("h2")
                profileLocation.innerHTML= "Location: "+ 
                    data.results[i].location.state+ ", "+ 
                    data.results[i].location.country

                profileEmail= document.createElement("h2")
                profileEmail.innerHTML= "Email Address: "+ 
                    data.results[i].email
                    
                profileLogin= document.createElement("h2")
                profileLogin.innerHTML= "username: "+ 
                    data.results[i].login.username+ "<br> password: "+ 
                    data.results[i].login.password
                
                profileRegistered= document.createElement("h2")
                profileRegistered.innerHTML="Date Registered: "+ 
                    data.results[i].registered.date
                
                profileCellPhone= document.createElement("h2")
                profileCellPhone.innerHTML= "Cell: "+ 
                    data.results[i].cell+ "&emsp; Phone: "+ 
                    data.results[i].phone
                
                profileBox= document.createElement("div")
                profileBox.append(
                    profileName, 
                    profileImg, 
                    profileLogin, 
                    profileDOB, 
                    profileRegistered, 
                    profileLocation, 
                    profileCellPhone, 
                    profileEmail
                )

                profileContainer.append(
                    profileBox
                )
            }
        }
    })

