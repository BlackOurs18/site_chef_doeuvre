# Git Quick Reference

---

## Clone
Copy a remote repo to your machine. Run once to get the project locally.
```bash
git clone <url>
git clone <url> <folder-name>
```

---

## Pull
Fetch latest changes from remote and merge into your current branch. Run before starting work to stay up to date.
```bash
git pull
git pull origin <branch>
```

---

## Add & Commit
`add` stages files (marks them ready to save). `commit` saves a snapshot of staged files with a message describing what changed.
```bash
git add .              # stage all changed files
git add <file>         # stage one file

git commit -m "message"
git commit -am "message"   # add tracked files + commit in one shot
```

---

## Push
Send your local commits to the remote repo so others (or GitHub) can see them.
```bash
git push
git push origin <branch>
git push -u origin <branch>   # set upstream (use on first push of a new branch)
```

---

## Status & Log
Check what's changed or see commit history.
```bash
git status          # shows staged, unstaged, untracked files
git log --oneline   # compact commit history
```

---

## Typical workflow
```
git pull                    # 1. get latest
git checkout -b my-feature  # 2. new branch
# ... make changes ...
git add .                   # 3. stage
git commit -m "add feature" # 4. commit
git push -u origin my-feature # 5. push
```

---

## Plugins & Skills

- [Superpowers](https://github.com/obra/superpowers)
- [Taste Skill](https://github.com/leonxlnx/taste-skill)
- [Impeccable](https://github.com/pbakaus/impeccable)
- [Caveman](https://github.com/juliusbrussee/caveman)
- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
