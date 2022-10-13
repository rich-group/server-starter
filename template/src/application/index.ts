{{#if_eq orm 'sequelize' }}
import('./sequelize')
{{else}}
import('./typeorm')
{{/if_eq}}