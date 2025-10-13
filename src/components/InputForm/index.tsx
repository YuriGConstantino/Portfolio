type Props = {
  label: string
  type?: string
  name: string
}

export const InputForm = ({ label, type, name }: Props) => {
  if (name === 'message') {
    return (
      <div className="mb-5">
        <label htmlFor={name} className="text-input-color mb-2 block">
          {label}
        </label>
        <textarea
          id={name}
          name={name}
          className="bg-input border-input-accent focus:border-accent-focus text-primary-color h-50 w-full resize-none rounded-lg border px-4 py-3 focus:outline-none"
          required
        ></textarea>
      </div>
    )
  }
  return (
    <>
      <div className="mb-4">
        <label htmlFor={name} className="text-input-color mb-2 block">
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          className="bg-input border-input-accent focus:border-accent-focus text-primary-color w-full rounded-lg border px-4 py-3 focus:outline-none"
          required
        />
      </div>
    </>
  )
}
