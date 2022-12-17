# Class 02:

## **The idea of branches:**

You can use branches to safely experiment with changes to your project. Branches isolate your development work from other branches in the repository. For example, you could use a branch to develop a new feature or fix a bug.

You always create a branch from an existing branch. Typically, you might create a branch from the default branch of your repository. You can then work on this new branch in isolation from changes that other people are making to the repository.

You can also create a branch starting from a previous commit in a branch's history. This can be helpful if you need to return to an earlier view of the repository to investigate a bug, or to create a hotfix on top of your latest release.

Once you're satisfied with your work, you can create a pull request to merge your changes in the current branch into another branch.

### how to create branches :

To create a new branch that is based on your currently checked out (HEAD) branch :

`$ git branch <new-branch>`

`git add .`

`git commit -m <your description>`

`git push origin <new-branch>`  

### How to create pull requests, and do merging : 

- Once you push the changes to your repo, the Compare & pull request button will appear in GitHub.
- Open a pull request by clicking the Create pull request button, to merge it :
- Under your repository name, click  **Pull requests**
- In the "Pull Requests" list, click the pull request you'd like to merge.
- Merge all of the commits into the base branch by clicking **Merge pull request**
- If prompted, type a commit message, or accept the default message.
- Click Confirm merge, Confirm squash and merge, or Confirm rebase and merge.
- Optionally, delete the branch. This keeps the list of branches in your repository tidy.


## how to solve conflicts:
- Create a repo
- Clone it, and add some code.
- Push it. 
- Let any TA clones it to his machine.
- You both have to edit the code in the same place. 
- Push your edits concurrently. 
- Explain the conflict and solve it.




## What is Wireframe and why do we use it:
A wireframe is a layout of a web page that demonstrates what interface elements will exist on key pages. It is a critical part of the interaction design process.

A wireframe aims to provide a visual understanding of a page early in a project to get stakeholder and project team approval before the creative phase gets underway. Wireframes can also be used to create global and secondary navigation to ensure the terminology and structure used for the site meet user expectations.
## How can we create a wireframe:
![wireframe](wireframe.JPG)

## GitHub pages:
1. From the navbar choose settings.
2. From the GitHub Pages section click on the `Check it out here!`
3. In the `Source` section choose `main` from the dropdown list.
4. In the `Theme Chooser` you can click on `Choose a theme` and choose whatever theme you want.
5. Click on the `Save` button and a link will appear above of `Source` section.


**Note:** If you click on the link and it gives you 404 page just wait some time and it will work.