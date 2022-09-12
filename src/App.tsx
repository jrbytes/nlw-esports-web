type TitleProps = {
  title: string
}

function Title(props: TitleProps) {
  return <h1>{props.title}</h1>
}

export function App() {
  return (
    <>
      <Title title="Hello world!" />
      <Title title="Live long and prosper!" />
    </>
  )
}

export default App
