//Variable Declaration and Class Initialization
const github  = new Github;
const ui = new UI;
const searchUser = document.querySelector('#searchUser');
const profileDiv = document.querySelector('#profile');

//Search Input Evenet Listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
        .then((data) => {
            if(data.profile.message === 'Not Found'){
                //Show alert
                ui.showAlert('User not found', 'alert')
            }else{
                //Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                //Adding styling to the profile Div
                profileDiv.classList.add('search')
            }
        });
    }else{
        //Clear profile
        ui.clearProfile();
        //Removing styling from the profile Div
        profileDiv.classList.remove('search')
    }
})