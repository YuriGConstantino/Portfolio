type Props = {
  label: string
  type?: string
  name: string
}

export const InputForm = ({ label, type, name }: Props) => {
  if (name === 'message') {
    return (
      <div className="mb-5">
        <label htmlFor={name} className="mb-2 block text-gray-300">
          {label}
        </label>
        <textarea
          id={name}
          name={name}
          className="w-full h-50 resize-none rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-sky-500 focus:outline-none"
          required
        ></textarea>
      </div>
    )
  }
  return (
    <>
      <div className="mb-4">
        <label htmlFor={name} className="mb-2 block text-gray-300">
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-sky-500 focus:outline-none"
          required
        />
      </div>
    </>
  )
}
