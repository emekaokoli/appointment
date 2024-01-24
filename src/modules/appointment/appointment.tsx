import { Loading } from "@/common/Loading"
import { useGetAllProviders } from "@/components/hooks/useGetAllProviders"
import { Card } from "../Card/Card"

export function Appointment() {

  const { providers, isLoading, isError, error } = useGetAllProviders()

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <div>{error.message}</div>
  }
  return (
    <div className="grid grid-cols-3 justify-between items-center m-5 gap-2">
      {providers?.map(({ name, bio, title, provider_id }) => (
        <Card key={provider_id} bio={bio} title={title} name={name} />
      ))}
    </div>
  )
}
