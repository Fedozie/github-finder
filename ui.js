class UI {
    constructor(){
        this.profile = document.querySelector('#profile');
    }


    //UI Class Prototype to display the profile
    showProfile(user){
        this.profile.innerHTML = `
            <div class = "card-body">
                <div class = "row">
                    <div class = "col-md-3">
                        <img class = "img-fluid" src = "${user.avatar_url}">
                        <a href= "${user.html_url}" target = "_blank" btn>View Profile</a>
                    </div>
                    <div class = "col-md-9">
                        <span class = "badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class = "badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class = "badge badge-success">Followers: ${user.followers}</span>
                        <span class = "badge badge-info">Following: ${user.following}</span>
                        <br>
                        <ul class = "list-group">
                            <li class = "list-group-item">Company: ${user.company}</li>
                            <li class = "list-group-item">Website/Blog: ${user.blog}</li>
                            <li class = "list-group-item">Location: ${user.location}</li>
                            <li class = "list-group-item">Member since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class = "page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    };

    showRepos(repos){
        let output = '';

        repos.forEach((repo) => {
            output += `
                <div class = "body">
                    <div class = "row">
                        <div class = "col-md-6>
                            <a href = "${repo.html_url}" target = "_blank>${repo.name}</a>
                        </div>
                        <div class = "col-md-6>
                            <span class = "badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class = "badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class = "badge badge-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        })

        const repoDiv = document.querySelector('#repos');
        repoDiv.innerHTML = output;
    }

    //UI Class Prototype to show alert if the user's profile isn't found
    showAlert(message, className){
        this.clearAlert();
        //Create a div
        const div = document.createElement('div');
        //Add classes
        div.className = className;
        //Add Text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector('.searchContainer');
        //Get search Box
        const search = document.querySelector('.search');
        //Insert alert
        container.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 2500)
    }

    //UI Class Prototype to clear alerts as to not make them repetitive
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    //UI Class Prototype to clear profile if the input is cleared
    clearProfile(){
        this.profile.innerHTML = '';
    };
}