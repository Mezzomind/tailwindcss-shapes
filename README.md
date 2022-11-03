# tailwindcss-shapes

A tailwind plugin that provides a simple way to create a square or a circle.

## Installation

Install the plugin from npm:

```sh
npm install -D tailwindcss-shapes
```

Then add the plugin to your `tailwind.config.js` file

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-shapes'),
    // ...
  ],
}
```

## Usage

Simply use `sq-{n}` or `circle-{n}` to set both the width and height of an element. The circle will additionally apply a border-radius of 9999px.

```html
<div class="sq-24">...contents</div>
```

Works with arbitrary values:

```html
<div class="sq-[53px]">
  <!-- ... -->
</div>
```

As well as with modifiers

```html
<div class="sq-12 lg:sq-16"></div>
```

By default all the default spacing values are available.

```text
  sq-px: 1px
  sq-0: 0
  sq-0.5: 0.125rem
  sq-1: 0.25rem
  sq-1.5: 0.375rem
  sq-2: 0.5rem
  sq-2.5: 0.625rem
  sq-3: 0.75rem
  sq-3.5: 0.875rem
  sq-4: 1rem
  sq-5: 1.25rem
  sq-6: 1.5rem
  sq-7: 1.75rem
  sq-8: 2rem
  sq-9: 2.25rem
  sq-10: 2.5rem
  sq-11: 2.75rem
  sq-12: 3rem
  sq-14: 3.5rem
  sq-16: 4rem
  sq-20: 5rem
  sq-24: 6rem
  sq-28: 7rem
  sq-32: 8rem
  sq-36: 9rem
  sq-40: 10rem
  sq-44: 11rem
  sq-48: 12rem
  sq-52: 13rem
  sq-56: 14rem
  sq-60: 15rem
  sq-64: 16rem
  sq-72: 18rem
  sq-80: 20rem
  sq-96: 24rem
```
