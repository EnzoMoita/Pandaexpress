export interface UsedSpaceWidgetProps {}

export function UsedSpaceWidget(props: UsedSpaceWidgetProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium leading-5 text-violet-700 dark:text-zinc-100">
          Espaço utilizado
        </span>
        <span className="text-sm leading-5 text-violet-500 dark:text-zinc-400">
          Seu time utilizou 20% do espaço disponivel. Precisa de mais?
        </span>
      </div>

      <div className="h-2 rounded-full bg-violet-100 dark:bg-zinc-600">
        <div className="h-2 w-1/4 rounded-full bg-violet-600 dark:bg-violet-400" />
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="text-sm font-medium text-red-500 dark:text-red-500"
        >
          Fechar
        </button>

        <button
          type="button"
          className="text-sm font-medium text-green-500 dark:text-green-300"
        >
          Aumentar plano
        </button>
      </div>
    </div>
  )
}
