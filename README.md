# Git and GitHub Workflow Tutorial

This repository provides a step-by-step walkthrough of basic workflow using Git and GitHub. Follow these steps to learn the fundamentals of collaborative coding and version control.

## Step 1: Fork this Repository

### What is forking and why fork?
Forking creates a personal copy of someone else's project. It allows you to freely experiment with changes without affecting the original project. Forking is essential for contributing to open-source projects or using someone's project as a starting point for your own.

## Step 2: Clone the Repository

# MAKE SURE TO CLONE YOUR FORKED REPOSITORY AND NOT THE ORIGINAL ONE 

### What is cloning?
Cloning creates a local copy of a repository on your computer, allowing you to work on the project offline.

### Clone using GitHub CLI:
navigate to the folder where you want to clone the repository and type 
```
gh repo clone <repository-url>
```
repository URL is available on github page of the repo, click on the green code button and copy the url 


### Clone using VS Code:
1. Open VS Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the command palette
3. Type "Git: Clone" and select it
4. Enter the repository URL and choose a local destination

## Step 3: Create a New Branch with Your Name and Switch to It

### What is a branch, and why do we need it?
A branch is a separate line of development. It allows you to work on different features or experiments without affecting the main codebase.

### Why make a new branch instead of using the main branch?
Creating a new branch keeps the main branch clean and stable. It also allows for easier collaboration and code review, and prevent's unwanted conflicats later on when multiple people are working on the same project.

### Branch using GitHub CLI:

open the repo folder in terminal and type 
```
gh branch create <your-name>
gh checkout <your-name>
```

### Branch using VS Code:
1. Click on the branch icon in the bottom-left corner
2. Click "Create new branch"
3. Enter your name as the branch name and press Enter

## Step 4: Add Yourself to the List

1. Add your image to `/public/images`
2. Add yourself to `/src/components/people.tsx`

## Step 5: Commit the Changes on Your Named Branch

### Commit in VS Code:
1. Open the Source Control view (Ctrl+Shift+G or Cmd+Shift+G on Mac)
2. Enter a commit message
3. Click the checkmark to commit

### Commit using GitHub CLI:
```
gh commit -m "Add [Your Name] to contributors list"
```

## Step 6: Merge Main and Your Named Branch

### What is merge?
Merging combines the changes from one branch into another. We will combine changes in your current name branch to the main branch of the repo. 

### Merge in VS Code:
1. Switch to the main branch
2. Click on the branch icon in the bottom-left corner
3. Select "Merge branch..." and choose your named branch

### Merge using GitHub CLI:
```
gh checkout main
gh merge <your-name>
```

## Step 7: Push the Code Back to GitHub

### Why are the changes local right now?
Changes made on your local machine are not automatically synchronized with the remote repository.

### Push using GitHub CLI:
```
gh push origin main
```

### Push using VS Code:
Click the "Sync Changes" button in the Source Control view

## Step 8: Create a Pull Request

### What is a pull request?
A pull request is a way to propose changes to the original repository. It allows for code review and discussion before merging.

### Create a pull request on GitHub:
1. Go to the original repository on GitHub
2. Click "Pull requests"
3. Click "New pull request"
4. Select your fork and the branch with your changes
5. Click "Create pull request"

## Step 9: Further Steps

- Congratulations on your successful contribution!
- You can continue making changes to your local repository without needing to clone again.
- find some cool repo's and start contibuting, or make your own ones with your friends 
