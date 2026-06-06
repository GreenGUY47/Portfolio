import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { dark, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg border border-gray-800
        dark:border-gray-700 bg-gray-800 dark:bg-gray-800
        text-white dark:text-white
        hover:bg-gray-700 dark:hover:bg-gray-700
        transition-colors duration-750"
      aria-label="Toggle dark mode"
    >
      {dark ? 'NIGHT' : 'DAY'}
    </button>
  )
}
