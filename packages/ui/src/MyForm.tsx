import { useAppSelector } from './slice'

export const MyForm = ({ version }: { version: string }) => {
  const name = useAppSelector((state) => state['my-slice'].name)
  return (
    <div>
      <h3>Version: {version}</h3>
      <label htmlFor="name">Name</label> <br />
      <input id="name" onChange={() => {}} type="text" value={name} />
    </div>
  )
}
