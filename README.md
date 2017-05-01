# DivvyApp
Divvy savings app

1. Do a commit to your personal branch at least every working half hour.
2. Only push testing code to the dev branch. Master branch will be reserved for the final product.
3. Let each other know what you're working on to avoid conflicts.

Git Workflow

  There is a dev branch that was branched off of master
  Each developer has their own branch derived from master
  A developer does work on their own branch
  When developer wants to push changes, they’ll run git checkout dev
  Run git pull origin dev to get the latest changes from GitHub
  Run git merge [your_branch_name] to merge your branch name into dev
  Fix any merge conflicts
  Do git push origin dev to push the new dev branch up
