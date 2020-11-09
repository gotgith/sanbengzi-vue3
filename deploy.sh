rm -rm dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:gotgith/jh-ui-website.git
git push -f -u origin main &&
cd ..
echo  https://gotgith.github.io/jh-ui-website/index.html
