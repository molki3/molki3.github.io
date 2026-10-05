---
description: Stage, commit, and push changes to the dev branch
globs: *
---

# Git Save & Push to Dev

When the user asks to save and push or invokes `/push-dev`:
1. Check the status of the repository with `git status`.
2. Stage all relevant modifications: `git add .` (respecting `.gitignore`).
3. Formulate a concise, descriptive commit message based on the recent changes using conventional commits (e.g., `feat: ...`, `fix: ...`, `chore: ...`).
4. Commit the changes: `git commit -m "<message>"`.
5. Ensure the target branch is `dev` (`git checkout dev` or verify current branch).
6. Push to remote: `git push origin dev`.
7. Report the status back with the commit hash and pushed branch.
