import '@testing-library/jest-dom'

// jsdom does not implement scrollTo; ProgressStep calls it on step changes.
window.scrollTo = jest.fn()

// jsdom does not implement matchMedia; Video (prefers-reduced-motion, R6.4)
// and any future media-query consumers need it. Defaults to "no match"
// (matches: false) — tests that need the reduced-motion branch override
// this per-test with mockImplementation/mockReturnValueOnce.
window.matchMedia = window.matchMedia || jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn()
}))
