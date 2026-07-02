import '@testing-library/jest-dom'

// jsdom does not implement scrollTo; ProgressStep calls it on step changes.
window.scrollTo = jest.fn()
