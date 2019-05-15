const Git = require("nodegit");
const config = require('config');
const fs = require("fs");

let repos = config.get('repos');

const publickey = fs.readFileSync(config.get('ssh')['public']).toString();
const privatekey = fs.readFileSync(config.get('ssh')['private']).toString();
const cred = Git.Cred.sshKeyMemoryNew('git', publickey, privatekey, '');

function cloneRepo(url, path) {
    console.log('cloning')
    const opts = {
        fetchOpts: {
            callbacks: {
                certificateCheck: () => 0,
                credentials: function (url, userName) {
                    return cred
                }
            }
        }
    };
    Git.Clone(url, path, opts).then(function(repository) {
        console.log('Repo cloned to ' + path);
    }).catch(function(err) {
        console.error(err);
    });
}

for (let idx in repos) {
    const repo = repos[idx];
    console.log(repo);
    let docsPath = config.get('docsDir') + repo['name'];
    if(fs.existsSync(docsPath)) {
        Git.Repository.open(docsPath).then((r) => {
            console.log(repo['name'] + ' open');
        }).catch((err) => {
            console.error(err);
        })

    } else {
        cloneRepo(repo['url'], docsPath);
    }

}


