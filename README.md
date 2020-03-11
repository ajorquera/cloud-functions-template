# Cloud Functions Template
![cloud-function-logo](https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Google-Cloud-Functions.svg/128px-Google-Cloud-Functions.svg.png)

Repo to use as template for developing cloud functions for your project. There is no standard way of a project structure, and after I have worked in a few different projects Im making this template for myself and any other person that would find it useful.

## PROJECT STRUCTURE

```
- package.json
- cloudbuild.yml
- jest.config.js
- test
- functions/
    - http/
      - serve.js
      - helloWorld/
    - background/
    - test/
    - package.json
```

* `cloudbuild.yml`: This will be your ci/cd file depending on what tool are you using for this. In our case we are using google [build](https://cloud.google.com/docs/ci-cd)

* Cloud functions can be divided into background and http functions, so thats the reason for the folder structure

* I use jest as my unit testing tool. 

* http functions can be serve locally for testing by using the following command

      npm run serve helloWorld

  Where `helloWorld` is the function to serve. 