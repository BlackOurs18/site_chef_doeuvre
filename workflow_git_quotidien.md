# Workflow Git quotidien

## Avant de commencer à travailler

1. Ouvre **Git Bash** (clic droit dans le dossier → "Git Bash Here", ou cherche Git Bash dans le menu Démarrer)
2. Navigue dans ton projet :
```bash
cd D:/claude_projects/nom-du-repo
```
3. Récupère les dernières modifications depuis GitHub :
```bash
git pull
```

---

## Après avoir travaillé

4. Ajoute tous tes fichiers modifiés :
```bash
git add .
```
5. Enregistre un commit avec une description courte :
```bash
git commit -m "Ce que tu as fait"
```
6. Envoie sur GitHub :
```bash
git push
```

---

## Règle d'or

> **Toujours `git pull` avant de commencer. Toujours `git push` avant de fermer.**  
> Si tu oublies le pull et que l'autre PC a poussé des changements → conflit.

---

## En cas d'erreur `rejected` au push

Quelqu'un a poussé avant toi. Fais d'abord :
```bash
git pull
```
Puis relance `git push`.
