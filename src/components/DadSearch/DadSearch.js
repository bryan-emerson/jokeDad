export default function DadSearch(props) {
  return (
    <div>
      <form >
        <label>
          Search Dad Jokes:
          <input type="text" required
            onChange={props.handle} />
        </label>
      </form>
    </div>
  )
}