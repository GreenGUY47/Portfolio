import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { dark, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg border border-orange-700
        dark:border-gray-700 bg-orange-600 dark:bg-gray-800
        text-white hover:font-bold dark:text-white
        hover:bg-orange-800/50 dark:hover:bg-gray-800/50
        transition-colors duration-750 w-20 h-10 flex items-center justify-center"
      aria-label="Toggle dark mode"
    >
      {dark ? 'NIGHT' : 'DAY'}
    </button>
  )
}
