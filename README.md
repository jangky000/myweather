# myweather
- No branches other than master
- Never ```$ git``` pull, never.
- Always $ git fetch first, and then $ git status.
    - If git tells you that you can fast-forward,
        - $ git merge.
    - If git tells you that branches are diverged,
        a. $ git stash all the local changes, if any.
        b. Compare local and remote commits to make sure they didn't change any common files. If they didn't, $ git rebase.
        c. And then $ git stash apply if you stash ed in 1.
