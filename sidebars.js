/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Get started',
      link: {
        type: 'generated-index',
        title: 'Get started with Stately',
        description:
          'Learn about state machines, statecharts, and the Stately Editor',
        slug: '/category/get-started',
        keywords: ['guides'],
      },
      items: [
        {
          type: 'doc',
          label: 'Introduction',
          id: 'studio',
        },
        {
          type: 'doc',
          label: 'State machines and statecharts',
          id: 'state-machines-and-statecharts',
        },
      ],
    },
    {
      type: 'category',
      label: 'Core concepts',
      link: {
        type: 'generated-index',
        title: 'Stately core concepts',
        description:
          'Learn about states, transitions, events, actions, and actors in the Stately Studio.',
        slug: '/category/core-concepts',
        keywords: ['guides'],
      },
      collapsed: false,
      collapsible: true,
      items: [
        {
          type: 'doc',
          label: 'Introducing states',
          id: 'states/intro',
        },
        'states/initial-states',
        'states/final-states',
        'states/parent-states',
        'states/parallel-states',
        'states/history-states',
        {
          type: 'category',
          label: 'Transitions and events',
          link: {
            type: 'generated-index',
            title: 'Transitions and events',
            description:
              'Learn about all the possible transitions and events in the Stately Editor.',
            slug: '/category/transitions-and-events',
            keywords: ['guides'],
          },
          items: [
            {
              type: 'doc',
              label: 'Transitions and events',
              id: 'transitions-and-events/intro',
            },
            'transitions-and-events/guards',
            'transitions-and-events/eventless-transitions',
            'transitions-and-events/delayed-transitions',
            'transitions-and-events/self-transitions',
            'transitions-and-events/state-done-events',
            'transitions-and-events/invoke-done-events',
            'transitions-and-events/invoke-error-events',
          ],
        },
        {
          type: 'category',
          label: 'Actions and actors',
          link: {
            type: 'generated-index',
            title: 'Actions and actors',
            description:
              'Learn about actions and actors in the Stately Editor.',
            slug: '/category/actions-and-actors',
            keywords: ['guides'],
          },
          items: [
            'actions-and-actors/entry-and-exit-actions',
            'actions-and-actors/actors',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Using the Studio',
      link: {
        type: 'generated-index',
        title: 'Using the Studio',
        description: 'Learn how to use the Stately Editor and Studio.',
        slug: '/category/using-the-studio',
        keywords: ['guides'],
      },
      collapsed: false,
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Design',
          link: {
            type: 'generated-index',
            title: 'Design mode',
            description: 'Learn how to use Design mode in the Stately Editor.',
            slug: '/category/design-mode',
            keywords: ['guides'],
          },
          items: [
            'descriptions',
            {
              type: 'doc', 
              label:'Version history',
              id: 'versions',
              className: 'pro-feature',
            },
            {
              type: 'doc', 
              label:'Live simulation',
              id: 'live-sim',
              className: 'pro-feature',
            },
            'import-from-code',
            'export-as-code',
          ]
        },
        'projects',
        {
          type: 'doc',
          label: 'Teams',
          className: 'pro-feature',
          id: 'teams',
        },
        'discover',
        {
          type: 'doc',
          label: 'Import from GitHub',
          className: 'pro-feature',
          id: 'import-from-github',
        },
        {
          type: 'category',
          label: 'Accounts',
          link: {
            type: 'generated-index',
            title: 'Accounts',
            description:
              'Learn about the Stately Studio plans and how to manage your account.',
            slug: '/category/accounts',
            keywords: ['guides'],
          },
          items: [
            {
              type: 'doc',
              label: 'Community plan',
              id: 'studio-community-plan',
              className: 'community-feature',
            },
            {
              type: 'doc',
              label: 'Pro plan',
              id: 'studio-pro-plan',
              className: 'pro-feature',
            },
            {
              type: 'doc',
              label: 'Enterprise plan',
              id: 'studio-enterprise-plan',
            },
            {
              type: 'doc',
              label: 'Sign up',
              id: 'sign-up',
            },
            {
              type: 'doc',
              label: 'Upgrade',
              id: 'upgrade',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'XState library',
      link: {
        type: 'generated-index',
        title: 'XState library',
        description: 'Learn about XState.',
        slug: '/category/xstate',
        keywords: ['guides'],
      },
      collapsed: false,
      collapsible: true,
      items: [
        {
          type: 'doc',
          label: 'Introducing XState',
          id: 'xstate/intro',
        },
        'xstate/installation',
        'xstate/templates',
        {
          type: 'category',
          label: 'Basics',
          link: {
            type: 'generated-index',
            title: 'XState basics',
            description: 'Learn the basics of XState.',
            slug: '/category/xstate-basics',
            keywords: ['guides'],
          },
          items: [
            {
              type: 'doc',
              label: 'What is a statechart?',
              id: 'xstate/basics/what-is-a-statechart',
            },
            'xstate/basics/options',
            'xstate/basics/inline-vs-named-options',
          ],
        },
        {
          type: 'category',
          label: 'Actions',
          link: {
            type: 'generated-index',
            title: 'Actions in XState',
            description: 'Learn how to use actions in XState.',
            slug: '/category/xstate-actions',
            keywords: ['guides'],
          },
          items: [
            'xstate/actions/actions',
            'xstate/actions/built-in-actions',
          ],
        },
        {
          type: 'doc',
          label: 'Context',
          id: 'xstate/actions/context',
        },
        {
          type: 'category',
          label: 'Transitions and choices',
          link: {
            type: 'generated-index',
            title: 'Transitions and choices in XState',
            description: 'Learn how to use transitions and guards in XState.',
            slug: '/category/xstate-transitions-and-choices',
            keywords: ['guides'],
          },
          items: [
            'xstate/transitions-and-choices/guards',
            'xstate/transitions-and-choices/guarded-actions',
            'xstate/transitions-and-choices/always',
            'xstate/transitions-and-choices/after',
            'xstate/transitions-and-choices/internal-external',
            'xstate/transitions-and-choices/transition-descriptions',
          ],
        },
        {
          type: 'category',
          label: 'Running machines',
          link: {
            type: 'generated-index',
            title: 'Running machines in XState',
            description: 'Learn how to run machines in XState.',
            slug: '/category/xstate-running-machines',
            keywords: ['guides'],
          },
          items: [
            {
              type: 'doc',
              label: 'Running machines',
              id: 'xstate/running-machines/intro',
            },
            'xstate/running-machines/react',
            'xstate/running-machines/node',
          ],
        },
        {
          type: 'category',
          label: 'Deep dive: states',
          link: {
            type: 'generated-index',
            title: 'Deep dive into states in XState',
            description: 'Learn all about states in XState.',
            slug: '/category/xstate-states',
            keywords: ['guides'],
          },
          items: [
            'xstate/states/parent-and-child-states',
            'xstate/states/other-state-attributes',
            'xstate/states/advanced-transitions',
            'xstate/states/final-states',
            'xstate/states/parallel-states',
            'xstate/states/history-states',
            'xstate/states/in-state-guards',
          ],
        },
        {
          type: 'category',
          label: 'Model-based testing',
          link: {
            type: 'generated-index',
            title: 'Model-based testing in XState',
            description:
              'Learn all about when and how to use model-based testing with XState.',
            slug: '/category/xstate-model-based-testing',
            keywords: ['guides'],
          },
          items: [
            {
              type: 'doc',
              label: 'Model-based testing',
              id: 'xstate/model-based-testing/intro',
            },
            'xstate/model-based-testing/when-to-use',
            'xstate/model-based-testing/quickstart',
            'xstate/model-based-testing/test-paths',
            'xstate/model-based-testing/assertions',
            'xstate/model-based-testing/event-cases',
            'xstate/model-based-testing/jest',
            'xstate/model-based-testing/vitest',
            'xstate/model-based-testing/cypress',
            'xstate/model-based-testing/playwright',
          ],
        },
        {
          type: 'category',
          label: 'Actors',
          link: {
            type: 'generated-index',
            title: 'Actors in XState',
            description: 'Learn all about using actors in XState.',
            slug: '/category/xstate-actors',
            keywords: ['guides'],
          },
          items: [
            {
              type: 'doc',
              label: 'Introducing actors',
              id: 'xstate/actors/intro',
            },
            'xstate/actors/promises',
            'xstate/actors/actions-vs-actors',
            'xstate/actors/callbacks',
            'xstate/actors/machines',
            'xstate/actors/observables',
            'xstate/actors/parent-child-communication',
            'xstate/actors/spawn',
            {
              type: 'doc',
              label: 'Actor cheatsheet',
              id: 'xstate/actors/cheatsheet',
            },
          ],
        },
        {
          type: 'category',
          label: 'TypeScript',
          link: {
            type: 'generated-index',
            title: 'TypeScript in XState',
            description: 'Learn about TypeScript in XState.',
            slug: '/category/xstate-typescript',
            keywords: ['guides'],
          },
          items: [
            'xstate/typescript/typegen',
            'xstate/typescript/type-helpers',
            'xstate/typescript/troubleshooting',
          ],
        },
        {
          type: 'category',
          label: 'Packages',
          link: {
            type: 'generated-index',
            title: 'XState packages',
            description: 'Find all the packages in XState.',
            slug: '/category/xstate-packages',
            keywords: ['guides'],
          },
          items: [
            'xstate/packages/xstate-fsm',
            'xstate/packages/xstate-graph',
            'xstate/packages/xstate-test',
            'xstate/packages/xstate-immer',
            'xstate/packages/xstate-react',
            'xstate/packages/xstate-svelte',
            'xstate/packages/xstate-vue',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Topics',
          link: {
            type: 'generated-index',
            title: 'Advanced topics in XState',
            description: 'Learn even more about XState.',
            slug: '/category/xstate-advanced-topics',
            keywords: ['guides'],
          },
          items: ['xstate/advanced/react-patterns', 'xstate/advanced/scxml'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer tools',
      collapsed: false,
      collapsible: true,
      link: {
        type: 'generated-index',
        title: 'Stately Developer tools',
        description:
          'Find all the developer tools you can use with XState and the Stately Editor.',
        slug: '/category/developer-tools',
        keywords: ['guides'],
      },
      items: [
        'tools/xstate-vscode-extension',
        'tools/visualizer',
        'tools/inspector',
        {
          type: 'doc',
          label: 'Other tools',
          id: 'tools/developer-tools',
        },
      ],
    },
    {
      type: 'doc',
      label: 'Examples',
      id: 'examples/intro',
    },
    {
      type: 'doc',
      label: 'Glossary',
      id: 'glossary',
    },
  ],
};

module.exports = sidebars;
