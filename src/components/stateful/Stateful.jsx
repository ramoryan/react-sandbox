import Link from 'components/link/Link'

class Stateful extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isRed : false
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({ isRed : !this.state.isRed })
    }, 2500)
  }

  @autobind
  onClick () {
    console.log(this.state) // eslint-disable-line no-console
  }

  render () {
    return (
      <div onClick={ this.onClick } >
        <h2>Stateful komponens</h2>
        <p style={ { color: this.state.isRed ? 'red' : 'black' } } >Hogy többet megtudj, kattints a linkre!</p>
        <Link href="https://facebook.github.io/react/docs/state-and-lifecycle.html">
          React state and lifecycle
        </Link>
      </div>
    )
  }
}

export default Stateful
