set -e

npm run build

cd www

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:drygnet/stenciljs-icons-example.git master:gh-pages

cd -