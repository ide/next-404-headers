# next-error-headers

Demo showing that Next.js serves custom headers even for error pages (e.g. 404s).

```
yarn
yarn next build
yarn next start

# Expect custom headers to be set
curl -s -D - -o /dev/null http://localhost:3000/static/nyan.png

# Custom headers are still set even though a 404 page is served
curl -s -D - -o /dev/null http://localhost:3000/static/missing
```
