const postcss = require('postcss')

let expected = `
.sq-px {
    width: 1px;
    height: 1px
}
.sq-6 {
    width: 1.5rem;
    height: 1.5rem
}
.sq-\\[11px\\] {
    width: 11px;
    height: 11px
}
.sq-\\[var\\(--box\\)\\] {
    width: var(--box);
    height: var(--box)
}
.circle-px {
    width: 1px;
    height: 1px;
    border-radius: 9999px
}
.circle-6 {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 9999px
}
.circle-\\[11px\\] {
    width: 11px;
    height: 11px;
    border-radius: 9999px
}
@media (min-width: 1024px) {
    .lg\\:sq-8 {
        width: 2rem;
        height: 2rem
    }
    .lg\\:circle-8 {
        width: 2rem;
        height: 2rem;
        border-radius: 9999px
    }
}
`

let css = postcss([
  require('tailwindcss')({
    content: [
      {
        raw: 'sq-px sq-6 sq-[11px] sq-[var(--box)] lg:sq-8 circle-px circle-6 circle-[11px] lg:circle-8',
      },
    ],
    plugins: [require('../')],
  }),
]).process('@tailwind utilities').css

test('sq values', () => {
  expect(css).toBe(expected.trim())
})
