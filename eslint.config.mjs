import antfu from '@antfu/eslint-config'
import next from '@next/eslint-plugin-next'

export default antfu({
  react: true,
}, {
    plugins: {
      '@next/next': next
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules
    }
})
