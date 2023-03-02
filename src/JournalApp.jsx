import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

/* Aqui es donde se arranca todo */
export const JournalApp = () => {
  return (
    <AppTheme>
        <AppRouter />
    </AppTheme>
  )
}
