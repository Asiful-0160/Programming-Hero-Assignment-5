function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-panel" aria-labelledby="stack-heading">
      <h2 id="stack-heading" className="text-lg font-bold">Your Stack</h2>
      <p className="mt-1 text-sm text-slate-400" aria-live="polite">
        {stack.length === 0
          ? 'No technologies selected yet.'
          : `${stack.length} ${stack.length === 1 ? 'Technology' : 'Technologies'} Selected`}
      </p>

      {stack.length === 0 ? (
        <p className="empty-stack">Your stack is empty.</p>
      ) : (
        <>
          <ul className="stack-items">
            {stack.map((technology) => (
              <li key={technology.id} className="stack-item">
                <img src={technology.icon} alt="" width="28" height="28" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold">{technology.name}</h3>
                  <p className="mt-1 text-[10px] text-slate-400">{technology.category}</p>
                </div>
                <button
                  type="button"
                  className="remove-item"
                  aria-label={`Remove ${technology.name} from stack`}
                  onClick={() => onRemove(technology.id)}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </li>
            ))}
          </ul>
          <button type="button" className="btn remove-all" onClick={onRemoveAll}>
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}

export default YourStack
