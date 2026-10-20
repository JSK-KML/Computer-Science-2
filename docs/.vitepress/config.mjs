import { defineConfig } from 'vitepress'

const lectures = [
  { text: 'Topic 1', link: '/lectures/topic-01' },
  { text: 'Topic 2', link: '/lectures/topic-02' },
  { text: 'Topic 3', link: '/lectures/topic-03' },
  { text: 'Topic 4', link: '/lectures/topic-04' },
  { text: 'Topic 6', link: '/lectures/topic-06' },
  { text: 'Topic 7', link: '/lectures/topic-07' }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CS125 Computer Science 2",
  description: "Course, Lectures and Labs Informations",
  base: '/Computer-Science-2/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Course Information',
        items: [
          { text: 'Course Overview', link: '/course/course' },
          { text: 'Topics', link: '/course/topics' },
          { text: 'Assessments', link: '/course/assessments' },
          { text: 'Schedule', link: '/course/schedule' }
        ],
        activeMatch: '^/course/'
      },
      {
        text: 'Lectures',
        items: lectures,
        activeMatch: '^/lectures/'
      },
      {
        text: 'Labs',
        items: [
          { text: 'Lab 1', link: '/labs/lab-01' },
          { text: 'Lab 2', link: '/labs/lab-02' }
        ],
        activeMatch: '^/labs/'
      }
    ],

    sidebar: {
      '/course/': [
        {
          text: 'Course Information',
          items: [
            { text: 'Course Overview', link: '/course/course' },
            { text: 'Topics', link: '/course/topics' },
            { text: 'Assessments', link: '/course/assessments' },
            { text: 'Schedule', link: '/course/schedule' }
          ]
        }
      ],
      '/lectures/': [
        {
          text: 'Lectures',
          items: lectures
        }
      ],
      '/labs/': [
        {
          text: 'Labs',
          items: [
            { text: 'Lab 1', link: '/labs/lab-01' },
            { text: 'Lab 2', link: '/labs/lab-02' }
          ]
        }
      ]
    },

    footer: {
      message: 'Released under the MIT License. All rights reserved.',
      copyright: 'Copyright © 2026-Present Muhammad Aiman Haris'
    },

    search: {
      provider: 'local'
    }
  }
})
