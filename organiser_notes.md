# Introductory demo

In order start the workshop with some demonstration of CI/CD in action and at the same time let the participants introduce themselves, we start with immediately let the participants deploy their own version of this app to the S3 playground.

## Preparation

The participants are encouraged to create their own forks of the repo as described in the preparation instruction in Confluence. The trainer will quickly recap the steps described there to give participants that couldn't do that yet a chance to follow up.

## Deployment

After setting up the workshop Jenkins as described in the workshop repo, there is a pipeline job template that can deploy from the parent repo. The trainer will show how to copy the template to create a pipeline job with a unique name for each participant (pipeline\_$GITHUB_USERNAME). And the necessary change in the Jenkinsfile, which is just replacing the Github username in the repo URL. Then, the participants should run their pipeline via the Jenkins UI.

The already present Jenkinsfile will deploy to the S3 bucket 'cicd-workshop-playground'.
After running the Jenkinsfile the app is accessible at
https://cicd-workshop-playground.s3.amazonaws.com/$GITHUB_USERNAME/index.html
There will be some IP based restriction to the bucket making it only available to workshop participants.

## Introduction round

After some of the participants have deployed their artefact (it's expected that not all deployments are successful), the trainer can cycle through the deployed pages and let the participants introduce themselves.

Here is some [nushell](www.nushell.sh) magic to open all deployed instances of the artefact:

```
http get https://cicd-workshop-playground.s3.eu-central-1.amazonaws.com | get content.content | flatten | where tag == Key | get content | flatten | get content | split column '/' | get column0 | uniq | each {|username| $"https://cicd-workshop-playground.s3.eu-central-1.amazonaws.com/($username)/index.html"} | each {|url| ^open $url}

```

`open` is the macOS CLI command to open a URL, on Linux replace it with the command for the browser you want to use. (You don't need the `^` if the command does not collide with a nushell build-in.)

It is also useful to have the browser tabs refresh automatically so that later changes are picked up. Since sometimes participants deploy first and only later modify the code and deploy again.

# The tools

## Github Actions

Running out of the box on, well, Github, see `.github`.

## Jenkins (WIP)

There is a Jenkinsfile present.

## Gitlab CI

There is a `.gitlab-ci.yml` with working test stages. Deployment has to be checked.

## TeamCity (POC)

Requires a TeamCity server, e.g. https://hub.docker.com/r/jetbrains/teamcity-server.
Due to issues with TeamCity's docker wrapper in some dockerised agents, an agent with locally installed yarn is required.
The way TeamCity handles its docker containers make a docker in docker setup rather complicated,
so that support for this rather obscure CI/CD tool is probably not worth the effort.
See `.teamcity` for a basic setup.
